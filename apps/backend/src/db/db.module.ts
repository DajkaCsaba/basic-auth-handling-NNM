import { PrismaService } from './prisma.service'
import { PrismaClientManager } from './prisma-client-manager.service'
import { PrismaClientAsyncStorage } from './prisma-client-async-storage.service'
import { Global, Logger, Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import {TransactionManager} from "@/db/transaction-manager.service";

@Global()
@Module({
  providers: [PrismaService, PrismaClientManager, TransactionManager, PrismaClientAsyncStorage],
  exports: [PrismaService, PrismaClientManager, TransactionManager, PrismaClientAsyncStorage],
})
export class DbModule implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(DbModule.name)

  constructor(private readonly prismaService: PrismaService) {}

  async onModuleInit(): Promise<void> {
    this.logger.log('Initializing DB module...')
    await this.prismaService.connect()
    this.logger.log('DB module initialized.')
  }

  async onModuleDestroy(): Promise<void> {
    this.logger.log('Destroying DB module...')
    await this.prismaService.disconnect()
    this.logger.log('DB module destroyed.')
  }
}
