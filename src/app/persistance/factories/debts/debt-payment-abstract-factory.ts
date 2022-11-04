import { Criteria, IDebtPayment, IEntityCreator, IRepository } from '../../../..';

export abstract class DebtPaymentAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IDebtPayment>) {}

  protected static instance: DebtPaymentAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IDebtPayment>;

  public createEntityInstance(fields: Criteria<IDebtPayment>): Promise<IDebtPayment> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: DebtPaymentAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): DebtPaymentAbstractFactory {
    return this.instance;
  }
}
