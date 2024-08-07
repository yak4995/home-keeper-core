import { Criteria, IAmortizationProject, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class AmortizationProjectAbstractFactory extends EntityAbstractFactory<IAmortizationProject> {
  protected constructor(entityCreator: IEntityCreator<IAmortizationProject>) {
    super(entityCreator);
  }

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
