//EXERCÍCIO 3 

export class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
