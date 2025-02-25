import { IPersistantEntity } from '.';

export type ComparisonOperators<T> =
  | { $eq?: T | null }
  | { $neq?: T | null }
  | {
      $in?: (T | null)[];
      $nin?: (T | null)[];
      $lt?: T;
      $lte?: T;
      $gt?: T;
      $gte?: T;
    };

export type TextOperators<T> = T extends string
  ? {
      $text?: string;
      $regex?: string | RegExp;
    }
  : {};

export type ArrayOperators<T> = T extends (infer U)[]
  ? {
      $arrayIncludes?: U | null;
      $arrayEq?: (U | null)[];
      $arraySize?: number;
    }
  : {};

export type FieldOperators<T> = T extends IPersistantEntity
  ? { id: ComparisonOperators<T['id'] | null> }
  : ComparisonOperators<T> & TextOperators<T> & ArrayOperators<T>;

// type, not an interface because "keyof T" what means Utility Types and can`t be applied in interface
export type FilterCriteria<T extends IPersistantEntity> = {
  [P in keyof T]?: FieldOperators<T[P]>;
};

export type ProjectionCriteria<T extends IPersistantEntity> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? U extends IPersistantEntity
      ? 0 | 1 | ProjectionCriteria<U>
      : 0 | 1
    : T[P] extends IPersistantEntity
      ? 0 | 1 | ProjectionCriteria<T[P]>
      : 0 | 1;
};

export type OrderCriteria<T extends IPersistantEntity> = {
  [P in keyof T]?: 'ASC' | 'DESC';
};

export interface ListResponse<T extends IPersistantEntity> {
  items: T[];
  count: number;
}
