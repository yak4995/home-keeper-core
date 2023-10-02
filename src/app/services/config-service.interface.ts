export interface IConfigService<T> {
  getConfigValue(key: string): Promise<T>;
}
