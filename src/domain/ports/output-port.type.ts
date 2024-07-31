import { InputPort } from './input-port.type';

export type OutputPort<ACTION_NAMES extends string, InputPortType extends InputPort<ACTION_NAMES>> = {
  [MethodName in keyof InputPortType]: <
    I extends Awaited<ReturnType<InputPortType[MethodName]>> = Awaited<ReturnType<InputPortType[MethodName]>>,
    R = I,
  >(
    output: I,
    outputTypeMapper: (arg: I) => R,
    exception: unknown,
  ) => Promise<R>;
};
