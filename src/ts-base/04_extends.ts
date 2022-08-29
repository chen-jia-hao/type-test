type IsStr<T> = T extends string ? true : false

type S1 = IsStr<string>
type S2 = IsStr<number>

type NakedToArr<T> = T extends any ? T[] : never
type t1 = NakedToArr<string | number>

type ToArr<T> = [T] extends [any] ? T[] : never
type t2 = ToArr<string | number>

