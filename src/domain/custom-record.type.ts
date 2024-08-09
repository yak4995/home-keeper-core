import { CustomPrimitive } from './custom-primitive.type';

export type CustomRecord = {
  [key: string]: CustomPrimitive | CustomPrimitive[] | CustomRecord | CustomRecord[];
};
