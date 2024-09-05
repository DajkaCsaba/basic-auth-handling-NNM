import { PrismaClient } from '@prisma/client'
import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class PrismaService extends PrismaClient {
  private readonly logger = new Logger(PrismaService.name)

  async connect(): Promise<void> {
    this.logger.debug(`Prisma is connecting...`)
    await this.$connect()
    this.logger.debug(`Prisma is connected.`)
  }

  async disconnect(): Promise<void> {
    this.logger.debug(`Prisma is disconnecting...`)
    await this.$disconnect()
    this.logger.debug(`Prisma is disconnected.`)
  }
}
