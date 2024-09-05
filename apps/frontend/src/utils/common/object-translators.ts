export function omitKeys<T extends Record<string, unknown>>(
  obj: T,
  keys: (keyof T)[]
): Omit<T, keyof T[]> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as keyof T))
  ) as Omit<T, keyof T[]>;
}

export function pickKeys<T extends Record<string, unknown>>(
  obj: T,
  keys: (keyof T)[]
): Pick<T, keyof T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key as keyof T))
  ) as Pick<T, keyof T>;
}