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

export const throwIfError = <T extends Error>(
  error?: T | string | null
): T extends Error ? never : void => {
  if (!error) return void 0 as never;
  if (error instanceof Error) throw error;
  return void 0 as never;
};
