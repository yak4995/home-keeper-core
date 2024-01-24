export interface IConfigService {
  getConfigValue<T>(key: string, outputTypeMapper: (arg: string) => T): Promise<T>;
}
