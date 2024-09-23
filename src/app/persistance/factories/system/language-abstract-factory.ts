import { IEntityCreator, ILanguage, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class LanguageAbstractFactory extends EntityAbstractFactory<ILanguage> {
  protected constructor(entityCreator: IEntityCreator<ILanguage>) {
    super(entityCreator);
  }

  protected static instance: LanguageAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ILanguage>;

  public createEntityInstance(fields: Partial<ILanguage>): Promise<ILanguage> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: LanguageAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): LanguageAbstractFactory {
    return this.instance;
  }
}
