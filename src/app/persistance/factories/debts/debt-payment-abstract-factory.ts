import { IDebtPayment, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class DebtPaymentAbstractFactory extends EntityAbstractFactory<IDebtPayment> {
  protected constructor(entityCreator: IEntityCreator<IDebtPayment>) {
    super(entityCreator);
  }

  protected static instance: DebtPaymentAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IDebtPayment>;

  public createEntityInstance(fields: Partial<IDebtPayment>): Promise<IDebtPayment> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: DebtPaymentAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): DebtPaymentAbstractFactory {
    return this.instance;
  }
}
