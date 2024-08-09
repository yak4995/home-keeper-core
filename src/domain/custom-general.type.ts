import { CustomPrimitive } from './custom-primitive.type';
import { CustomRecord } from './custom-record.type';

export type CustomGeneralType = CustomPrimitive | CustomPrimitive[] | CustomRecord | CustomRecord[] | object;
