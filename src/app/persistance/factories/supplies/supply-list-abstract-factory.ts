import { Criteria, IEntityCreator, IRepository, ISupplyList } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class SupplyListAbstractFactory extends EntityAbstractFactory<ISupplyList> {
  protected constructor(entityCreator: IEntityCreator<ISupplyList>) {
    super(entityCreator);
  }

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
