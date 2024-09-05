export type Result<Success, Fail> = { success?: Success; fail?: Fail };
export type ErrorMap<T extends string> = Record<T, string>;
