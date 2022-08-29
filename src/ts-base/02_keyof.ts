type Friend = {
  firstName: string;
  lastName: string;
}

type Keys = keyof Friend

class Person {
  public name: string;
  protected age: number;
  private sex: boolean;

  public foo() {}
  protected bar() {}
  private baz() {}
}

type Ks = keyof Person

