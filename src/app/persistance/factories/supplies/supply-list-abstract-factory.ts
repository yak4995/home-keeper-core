import { Criteria, IEntityCreator, IRepository, ISupplyList } from '../../../..';

export abstract class SupplyListAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<ISupplyList>) {}

  protected static instance: SupplyListAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ISupplyList>;

  public createEntityInstance(fields: Criteria<ISupplyList>): Promise<ISupplyList> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: SupplyListAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): SupplyListAbstractFactory {
    return this.instance;
  }
}
