import type { IReducedPrismaClient } from './types'

import { Injectable } from '@nestjs/common'
import { AsyncLocalStorageProvider } from './async-local-storage.provider'

@Injectable()
export class PrismaClientAsyncStorage extends AsyncLocalStorageProvider<IReducedPrismaClient> {}
