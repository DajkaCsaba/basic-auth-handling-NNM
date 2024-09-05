/**
 * This is a helper for you to be able to do multiple actions in services but still
 * keep them in one transaction. This is achieved by using Node's async local storage
 * which is a construction like thread-local storages in other languages.
 * Quick example of one: https://www.geeksforgeeks.org/thread_local-storage-in-cpp-11/
 *
 * Known limitations: Cannot provide yet a helper that will not start
 * a transaction if the current client was not in transaction.
 */

import type { PrismaClient } from '@prisma/client'
import type { IReducedPrismaClient } from './types'

import { Injectable, Logger } from '@nestjs/common'
import { PrismaClientManager } from './prisma-client-manager.service'
import { PrismaClientAsyncStorage } from './prisma-client-async-storage.service'

export type ITransactionOptions = Parameters<PrismaClient['$transaction']>[1]

@Injectable()
export class TransactionManager {
  private readonly logger = new Logger(TransactionManager.name)

  constructor(
    private readonly storage: PrismaClientAsyncStorage,
    private readonly prismaClientManager: PrismaClientManager,
  ) {}

  /**
   * This will make sure the proper handler is used for transactions.
   * The passed in callback will be run in a transaction no matter what.
   * @param fn
   * @param transactionOptions
   */
  async withTransaction<R>(
    fn: (prisma: IReducedPrismaClient) => Promise<R>,
    transactionOptions?: ITransactionOptions,
  ): Promise<R> {
    const { fullClient, transactionClient } = this.prismaClientManager.getClient()

    if (!fullClient && !transactionClient) {
      this.logger.error('Could get no Prisma client!')
      throw new Error("Internal server error")
    }

    if (transactionClient) {
      this.logger.verbose('Noticed client was in transaction, only running the operation.')
      return this.storage.localStorage.run(transactionClient, () => fn(transactionClient)) as Promise<R>
    }

    this.logger.verbose('Noticed client was not in transaction, starting a new one.')

    return fullClient!.$transaction(async (tx) => {
      this.logger.verbose('Starting transaction by calling our generic function with the new client.')
      try {
        return await this.storage.localStorage.run(tx, () => fn(tx))
      } catch (e) {
        this.logger.error(`Error in transaction!`, e)
        throw e
      }
    }, transactionOptions)
  }

  /**
   * This function has been created in order to optionally put an operation
   * into a transaction.
   * E.g.: When you write a function that SHOULD be a part of a transaction (e.g.: resource creation)
   * but if ran alone, it does not need to run in transaction, this function will
   * try to get the current transaction client and use that, or else just give a normal client
   * to run the operation on.
   * @param op
   * @param transactionOptions
   */
  withAutoTransaction<R>(
    op: (prisma: IReducedPrismaClient) => Promise<R>,
    transactionOptions?: ITransactionOptions,
  ): Promise<R> {
    const { fullClient, transactionClient } = this.prismaClientManager.getClient()

    if (!fullClient && !transactionClient) {
      this.logger.error('Could get no Prisma client!')
      throw new Error("Internal server error")
    }

    return transactionClient ? this.withTransaction(() => op(transactionClient), transactionOptions) : op(fullClient!)
  }
}
