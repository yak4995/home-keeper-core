import { Criteria, IAmortizationProject, IEntityCreator, IRepository } from '../../../..';

export abstract class AmortizationProjectAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IAmortizationProject>) {}

  protected static instance: AmortizationProjectAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IAmortizationProject>;

  public createEntityInstance(fields: Criteria<IAmortizationProject>): Promise<IAmortizationProject> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: AmortizationProjectAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): AmortizationProjectAbstractFactory {
    return this.instance;
  }
}
