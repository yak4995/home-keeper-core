import { CustomGeneralType } from '../custom-general.type';

// second TsType will be TsType by default, because depends on output implementation
export type InputPort<T extends Record<string, [CustomGeneralType, CustomGeneralType]>> = {
  // payload can have any subclass of T[methodName][0]
  [methodName in keyof T]: T[methodName][0] extends undefined
    ? // first param is optional, if first CustomGeneralType is undefined (for example, for getAll-methods)
      (payload?: T[methodName][0]) => Promise<T[methodName][1]>
    : (payload: T[methodName][0] extends infer R ? R : never) => Promise<T[methodName][1]>;
};
