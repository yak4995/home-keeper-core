import { CustomGeneralType } from '../custom-general.type';

export type OutputPort<T extends Record<string, [CustomGeneralType, CustomGeneralType]>> = {
  [methodName in keyof T]: (
    // output can have any subclass of T[methodName][0]
    output: T[methodName][0] extends infer R ? R : never,
    exception: unknown,
  ) => Promise<T[methodName][1]>;
};
