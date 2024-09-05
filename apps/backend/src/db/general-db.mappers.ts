/*
import type { PersistedSortsOf, SortsOf } from './types'

import { SortOrder } from '../prisma-generated/prisma'
import { SortDirection } from '@studium/common'

export const sortDirectionToPersistence = <T>(input: SortsOf<T>): PersistedSortsOf<T> => {
  return Object.keys(input).reduce(
    (a, c) => ({ ...a, [c]: input[c] === SortDirection.asc ? SortOrder.asc : SortOrder.desc }),
    {} as PersistedSortsOf<T>,
  )
}
*/
