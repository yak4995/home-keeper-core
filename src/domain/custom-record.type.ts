export type CustomRecord = {
  [key: string]: undefined | number | string | boolean | null | CustomRecord | CustomRecord[];
};
