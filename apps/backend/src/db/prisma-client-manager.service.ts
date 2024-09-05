import type { IFullPrismaClient, IReducedPrismaClient } from './types'

import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { PrismaClientAsyncStorage } from './prisma-client-async-storage.service'

@Injectable()
export class PrismaClientManager {
  constructor(protected readonly prismaClient: PrismaService, private readonly storage: PrismaClientAsyncStorage) {}

  getClient(): { transactionClient?: IReducedPrismaClient; fullClient?: IFullPrismaClient } {
    const client = this.storage.localStorage.getStore()
    return { transactionClient: client ?? void 0, fullClient: client ? void 0 : this.prismaClient }
  }
}
