type MyExclude<T, U> = T extends U ? never : T

type ex1 = 'a' | 'b' | 'c' | 'd'
type ex2 = 'a' | 'b'

type ex3 = MyExclude<ex1, ex2>
type ex4 = Exclude<ex1, ex2>
