import { Injectable } from '@nestjs/common';
import { UserDAO, UserDTO } from '@/auth/auth.types';
import { CryptoService } from '@/common/services/crypto.service';
import { pickKeys } from '@renter/common';

@Injectable()
export class AuthMapper {
  constructor(private readonly cryptoService: CryptoService) {}

  encryptedToDecripted(dao: UserDAO): UserDAO {
    const { email, ...rest } = dao;
    return {
      ...rest,
      email: this.cryptoService.decrypt(email),
    };
  }

  DAOToDTO(dao: UserDAO): UserDTO {
    return pickKeys(dao, ['id', 'firstName', 'lastName', 'email']);
  }
}
