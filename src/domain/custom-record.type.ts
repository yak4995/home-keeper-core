export interface CustomRecord {
  [key: string]: undefined | number | string | boolean | null | CustomRecord | CustomRecord[];
}
