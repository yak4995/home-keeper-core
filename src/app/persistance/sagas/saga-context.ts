export class SagaContext<T> {
  constructor(public input: T) {}
  // Here we store data about state of saga
  // input data...
  // intermediate data (optional):
  // - userId
  // - householdId
  // - accountId
  // - txs
  // - etc...
  // output data...
}
