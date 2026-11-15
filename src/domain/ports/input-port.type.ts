// second object will be object by default, because depends on output implementation
export type InputPort<T extends Record<string, [object, object | void]>> = {
  // payload can have any subclass of T[methodName][0]
  [methodName in keyof T]: (
    payload: T[methodName][0] extends infer R ? R : never,
    opts: Record<string, unknown>,
  ) => Promise<T[methodName][1]>;
};
