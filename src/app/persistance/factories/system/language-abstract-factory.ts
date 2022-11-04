import { Criteria, IEntityCreator, ILanguage, IRepository } from '../../../..';

export abstract class LanguageAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<ILanguage>) {}

  protected static instance: LanguageAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ILanguage>;

  public createEntityInstance(fields: Criteria<ILanguage>): Promise<ILanguage> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: LanguageAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): LanguageAbstractFactory {
    return this.instance;
  }
}
