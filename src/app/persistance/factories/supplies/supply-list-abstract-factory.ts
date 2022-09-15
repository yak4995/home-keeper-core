import { EntityAbstractFactory, ISupplyList } from '../../../..';

export abstract class SupplyListAbstractFactory extends EntityAbstractFactory<ISupplyList> {
  public static setInstance(instance: SupplyListAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: SupplyListAbstractFactory = null;

  public static getInstance(): SupplyListAbstractFactory {
    return this.instance;
  }
}
