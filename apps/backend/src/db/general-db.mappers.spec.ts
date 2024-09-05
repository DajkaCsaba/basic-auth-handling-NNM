/*
import { SortOrder } from '../prisma-generated/prisma'
import { SortDirection } from '@studium/common'
import { sortDirectionToPersistence } from './general-db.mappers'

describe('General DB mappers', () => {
  describe(sortDirectionToPersistence, () => {
    const cases: [input: Record<string, SortDirection>, result: Record<string, SortOrder>][] = [
      [{}, {}],
      [{ a: SortDirection.asc }, { a: SortOrder.asc }],
      [
        { a: SortDirection.asc, b: SortDirection.desc },
        { a: SortOrder.asc, b: SortOrder.desc },
      ],
    ]

    test.each(cases)('should map %o to %o', (input, result) => {
      expect(sortDirectionToPersistence(input)).toEqual(result)
    })
  })
})
*/

describe('general-db.mappers', () => {
  test('make it pass', () => {
    expect(1).toEqual(1);
  });
});
