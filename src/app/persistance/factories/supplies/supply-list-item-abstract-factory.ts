import { Criteria, IEntityCreator, IRepository, ISupplyListItem } from '../../../..';

export abstract class SupplyListItemAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<ISupplyListItem>) {}

  protected static instance: SupplyListItemAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ISupplyListItem>;

  public createEntityInstance(fields: Criteria<ISupplyListItem>): Promise<ISupplyListItem> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: SupplyListItemAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): SupplyListItemAbstractFactory {
    return this.instance;
  }
}
