type Pop<T extends unknown[]> = T extends [...infer Rest, infer R]
  ? [...Rest] : never

type p1 = Pop<[1, 2, 3]>
