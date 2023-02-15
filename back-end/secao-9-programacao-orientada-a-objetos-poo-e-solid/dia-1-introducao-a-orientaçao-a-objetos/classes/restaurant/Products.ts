export default class Products {
  private _product: string
  private _price: number;

  constructor(product: string, price: number) {
    this._product = product;
    this._price = price;
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    this._product = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
} 
