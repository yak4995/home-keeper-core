export interface IConfigService {
  getConfigValue(key: string): Promise<unknown>;
}
