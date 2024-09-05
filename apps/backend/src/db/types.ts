import type { PrismaClient } from '@prisma/client'


import type * as runtime from '@prisma/client/runtime/library'

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}

export enum SortDirection {
  asc = 1,
  desc = -1,
}

export type IFullPrismaClient = PrismaClient
export type IReducedPrismaClient = Omit<PrismaClient, runtime.ITXClientDenyList>

export type SortsOf<T> = { [K in keyof T]?: SortDirection }
export type PersistedSortsOf<T> = { [K in keyof T]?: SortOrder }
