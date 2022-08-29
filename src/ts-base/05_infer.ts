type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R ? R : any

type Foo = () => string
type r1 = MyReturnType<Foo>
type r2 = ReturnType<Foo>

type Infer1<T> = T extends (infer S)[] ? S : never
type a1 = Infer1<string>
type a2 = Infer1<string[]>

type Infer2<T> = T extends [infer S] ? S : never
type b1 = Infer2<[string, number]>
type b2 = Infer2<[string]>

type Infer3<T> = T extends [infer S, ...infer R] ? [S, R] : never
type c1 = Infer3<[]>
type c2 = Infer3<[string]>
type c3 = Infer3<[string, number]>
type c4 = Infer3<[string, number, boolean]>

type Infer4<T> = T extends `${infer S}` ? S : never
type d1 = Infer4<'str'>
type d2 = Infer4<1>

type Infer5<T> = T extends `${infer S}${infer R}` ? [S, R] : never
type e1 = Infer5<"">
type e2 = Infer5<"s">
type e3 = Infer5<"st">
type e4 = Infer5<"str">

type Infer6<T> = T extends `${infer S}__${infer R}` ? [S, R] : never
type f1 = Infer6<"">
type f2 = Infer6<"str1__str2">
type f3 = Infer6<"str1__str2__str3">

type Infer7<T> = T extends Promise<infer R> ? R : never
type g1 = Infer7<"">
type g2 = Infer7<Promise<number>>

type StrToTuple<T extends string> = T extends `${infer F}${infer L}`
  ? [F, ...StrToTuple<L>]
  : [];

type h1 = StrToTuple<"abc">

type StrToTupleOptimize<T extends string, R extends string[] = []>
  = T extends `${infer F}${infer L}` ? StrToTupleOptimize<L, [...R, F]> : R;

type h2 = StrToTupleOptimize<"abc">
