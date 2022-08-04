import { EntityAbstractFactory, ILanguage } from '../..';

export abstract class LanguageAbstractFactory extends EntityAbstractFactory<ILanguage> {
  public static setInstance(instance: LanguageAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: LanguageAbstractFactory = null;

  public static getInstance(): LanguageAbstractFactory {
    return this.instance;
  }
}
