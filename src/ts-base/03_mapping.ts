import {Equal, Expect} from "@type-challenges/utils"

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type MyReadonlyFriend = MyReadonly<Friend>

type ReadonlyFriend = Readonly<Friend>

type RemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P];
};

type Friend1 = RemoveReadonly<ReadonlyFriend>


// remapping

// type CapitalKey<T> = {
//   [P in keyof T as `${Capitalize<P>}`]: T[P]
// }
//
// type CapFriend = CapFriend<Friend>

type cases = [
  Expect<Equal<MyReadonlyFriend, ReadonlyFriend>>,
  Expect<Equal<Friend1, Friend>>
]
