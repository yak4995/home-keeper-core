import { EntityAbstractFactory, IDebtPayment } from '../../../..';

export abstract class DebtPaymentAbstractFactory extends EntityAbstractFactory<IDebtPayment> {
  public static setInstance(instance: DebtPaymentAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: DebtPaymentAbstractFactory = null;

  public static getInstance(): DebtPaymentAbstractFactory {
    return this.instance;
  }
}
