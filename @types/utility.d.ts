/** Exclude null and undefined from T */
type NonNullable<T> = T extends null | undefined ? never : T;

type Nullable<T> = T | null;
