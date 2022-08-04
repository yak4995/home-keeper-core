import { EntityAbstractFactory, ISupplyListItem } from '../..';

export abstract class SupplyListItemAbstractFactory extends EntityAbstractFactory<ISupplyListItem> {
  public static setInstance(instance: SupplyListItemAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: SupplyListItemAbstractFactory = null;

  public static getInstance(): SupplyListItemAbstractFactory {
    return this.instance;
  }
}
