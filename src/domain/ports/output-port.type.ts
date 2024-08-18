export type OutputPort<T extends Record<string, [object, object]>> = {
  [methodName in keyof T]: (
    // output can have any subclass of T[methodName][0]
    output: T[methodName][0] extends infer R ? R : never,
    exception: unknown,
    opts: Record<string, unknown>,
  ) => Promise<T[methodName][1]>;
};
