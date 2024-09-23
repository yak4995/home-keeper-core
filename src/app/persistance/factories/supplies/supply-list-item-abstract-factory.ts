import { IEntityCreator, IRepository, ISupplyListItem } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class SupplyListItemAbstractFactory extends EntityAbstractFactory<ISupplyListItem> {
  protected constructor(entityCreator: IEntityCreator<ISupplyListItem>) {
    super(entityCreator);
  }

  protected static instance: SupplyListItemAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ISupplyListItem>;

  public createEntityInstance(fields: Partial<ISupplyListItem>): Promise<ISupplyListItem> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: SupplyListItemAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): SupplyListItemAbstractFactory {
    return this.instance;
  }
}
