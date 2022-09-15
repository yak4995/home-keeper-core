import { EntityAbstractFactory, ITax } from '../../../..';

export abstract class TaxAbstractFactory extends EntityAbstractFactory<ITax> {
  public static setInstance(instance: TaxAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: TaxAbstractFactory = null;

  public static getInstance(): TaxAbstractFactory {
    return this.instance;
  }
}
