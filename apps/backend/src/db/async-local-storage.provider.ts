import { AsyncLocalStorage } from 'node:async_hooks'

export abstract class AsyncLocalStorageProvider<T> {
  private readonly storage = new AsyncLocalStorage<T>()

  get localStorage(): AsyncLocalStorage<T> {
    return this.storage
  }
}
