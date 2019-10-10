export type MapExclude<T, U> = {
  [K in keyof T]: Exclude<T[K], U>;
};
