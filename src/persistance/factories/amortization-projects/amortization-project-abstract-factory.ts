import { EntityAbstractFactory, IAmortizationProject } from '@persistance';

export abstract class AmortizationProjectAbstractFactory extends EntityAbstractFactory<IAmortizationProject> {
  public static setInstance(instance: AmortizationProjectAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: AmortizationProjectAbstractFactory = null;

  public static getInstance(): AmortizationProjectAbstractFactory {
    return this.instance;
  }
}
