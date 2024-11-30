import { SagaCommand } from './command.interface';
import { Saga } from './saga';
import { SagaContext } from './saga-context';

import { SystemOpts } from '../../types';

export abstract class SagaBuilder<T> {
  private readonly saga: Saga<T>;

  constructor(input: T, opts: SystemOpts) {
    this.saga = this.initInstance(input, opts);
  }

  protected abstract initInstance(input: T, opts: SystemOpts): Saga<T>;

  addStep(command: SagaCommand<SagaContext<T>>): SagaBuilder<T> {
    this.saga.addStep(command);
    return this;
  }

  build(): Saga<T> {
    return this.saga;
  }
}
