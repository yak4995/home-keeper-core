import { SagaContext } from './saga-context';

import { SystemOpts } from '../../types';

export interface SagaCommand<Context extends SagaContext<unknown>> {
  execute(context: Context, opts: SystemOpts): Promise<void>;
  rollback(context: Context, opts: SystemOpts): Promise<void>;
}
