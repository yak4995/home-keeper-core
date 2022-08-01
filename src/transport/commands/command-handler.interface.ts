import { Command } from '@transport';

/*
  Client is an app.
  Invoker is controller/GQL-resolver.
  Reciever is NestJS CQRS command handler.

  Each mutation method in GQL-resolver recieves own DTO, passes it into constructor of needed Command-subclass and calls execute() method of instantied Command-object.
  Each Command-subclass has commandBus: CommandBus field from NestJS and its own implementation of execute() method has such line:
    this.commandBus.execute(this);

  For each Command-subclass we have separate handler class with @CommandHandler(CommandSubClass) where own execute(command: Comand) method exists as well,
  and where required logic is called using InputPort-implementation.

  Each Command-object can be logged/persisted, can be transformed into async event, can fetch and save state before its execution,
  what lets it to rollback itself, if some exception is thrown or by user desire.

  Also it lets it to implement Saga pattern for distributing transactions.

  Saga-pattern is: each command begin sequence of events, which make execute listeners local transactions in their DBs, and when some transaction was failed,
  listener should start sequence of revert events for make distributed transaction rollback.
*/
export interface ICommandHandler<T extends Command> {
  execute(command: T): Promise<any>;
  rollback(command: T): Promise<any>;
}
