//EXERCÍCIO 3 

export default class Person {
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

