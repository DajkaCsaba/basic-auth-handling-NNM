import { Injectable } from '@nestjs/common';
import { TransactionManager } from '@/db/transaction-manager.service';
import { CryptoService } from '@/common/services/crypto.service';
import { Maybe } from '@/common/common.type';
import { Prisma } from '@prisma/client';
import bcryptjs from 'bcryptjs';
import { UserDAO } from './auth.types';
import { AuthMapper } from './auth.mapper';

@Injectable()
export class AuthService {
  constructor(
    private readonly transactionManager: TransactionManager,
    private readonly cryptoService: CryptoService,
    private readonly authMapper: AuthMapper
  ) {}

  async findUser(where: Prisma.UserWhereInput): Promise<Maybe<UserDAO>> {
    return this.transactionManager.withAutoTransaction(async (prisma) => {
      const dao: Maybe<UserDAO> = await prisma.user.findFirst({ where });
      return dao ? this.authMapper.encryptedToDecripted(dao) : null;
    });
  }

  async isUserExist(where: Prisma.UserWhereInput): Promise<boolean> {
    return this.transactionManager.withAutoTransaction(async (prisma) => {
      return (await prisma.user.count({ where })) > 0;
    });
  }

  async saveResetPasswordToken(
    email: string,
    resetPasswordToken: string
  ): Promise<UserDAO> {
    return this.transactionManager.withAutoTransaction(async (prisma) => {
      const dao: UserDAO = await prisma.user.update({
        where: { email: this.cryptoService.encrypt(email) },
        data: { resetPasswordToken },
      });
      return this.authMapper.encryptedToDecripted(dao);
    });
  }

  async register(data: Prisma.UserCreateInput): Promise<UserDAO> {
    return this.transactionManager.withAutoTransaction(async (prisma) => {
      const dao: UserDAO = await prisma.user.create({ data });
      return this.authMapper.encryptedToDecripted(dao);
    });
  }

  async setPassword(email: string, password: string): Promise<UserDAO> {
    return this.transactionManager.withAutoTransaction(async (prisma) => {
      const dao: UserDAO = await prisma.user.update({
        where: {
          email,
        },
        data: {
          password: bcryptjs.hashSync(password),
        },
      });
      return this.authMapper.encryptedToDecripted(dao);
    });
  }
}
