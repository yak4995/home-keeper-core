export type InputPort<ACTION_NAMES extends string> = {
  [methodName in ACTION_NAMES]: (...args: any[]) => Promise<any>;
};
