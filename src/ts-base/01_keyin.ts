import {Equal, Expect} from "@type-challenges/utils"

type FriendList = {
  count: number;
  friends: {
    firstName: string;
    lastName: string;
  }[];
};

type Friends = FriendList["friends"]

type Friend = Friends[number]

type Fri = FriendList['friends'][123]

type cases = [
  Expect<Equal<Fri, Friend>>
]
