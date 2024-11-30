import { SagaCommand } from './command.interface';
import { SagaContext } from './saga-context';

import { SystemOpts } from '../../types';

export abstract class Saga<T> {
  protected readonly context: SagaContext<T>;
  protected readonly opts: SystemOpts;
  protected readonly steps: SagaCommand<SagaContext<T>>[] = [];

  constructor(input: T, opts: SystemOpts) {
    this.context = new SagaContext<T>(input);
    this.opts = opts;
  }

  addStep(command: SagaCommand<SagaContext<T>>): Saga<T> {
    this.steps.push(command);
    return this;
  }

  getContext() {
    return this.context;
  }

  async execute(): Promise<void> {
    let failedStepIndex: number = 0;
    try {
      for (let i = 0; i < this.steps.length; i++) {
        try {
          await this.steps[i].execute(this.context, this.opts);
        } catch (stepError) {
          failedStepIndex = i;
          throw stepError;
        }
      }
    } catch (sagaError) {
      if (!!failedStepIndex)
        for (const step of this.steps.slice(0, failedStepIndex).reverse())
          try {
            await step.rollback(this.context, this.opts);
          } catch {
            // Continue rollback of other steps
          }
      throw sagaError;
    }
  }
}
