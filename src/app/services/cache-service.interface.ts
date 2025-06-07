export interface ICacheService {
  getAllKeys(): Promise<string[]>;
  has(key: string): Promise<boolean>;
  get<T>(key: string, fetchCallback: () => Promise<T>): Promise<T>;
  set<T>(keys: string[], value: T): Promise<T[]>;
  clear(keys: string[]): Promise<boolean>;
  clearAll(): Promise<boolean>;
}
