type GetTuple<T extends number, R extends any[] = []> = R["length"] extends T
  ? R
  : GetTuple<T, [...R, any]>;

type Add<T1 extends number, T2 extends number> = [
  ...GetTuple<T1>,
  ...GetTuple<T2>
]["length"];

type tu1 = GetTuple<2>

type tt1 = 1 extends 1 ? true: false;

type Five = Add<3, 2>; // 5
