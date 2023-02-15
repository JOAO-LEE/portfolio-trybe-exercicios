import Person from './Person';
import Products from './Products';

export default class Order {
  private _customer: Person;
  private _products: Products[];
  private _paymentType: string;
  private _discount: number;

  constructor(customer: Person, products: Products[], payment: string, discount: number) {
    this._customer = customer
    this._products = products
    this._paymentType = payment
    this._discount = discount
  }

  get client(): Person {
    return this._customer;
  }

  set name(value: Person) {
    this._customer = value;
  }

  get products(): Products[] {
    return this._products;
  }

  set products(value: Products[]) {
    this._products = value;
  }

  get paymentType(): string {
    return this._paymentType;
  }

  set paymentType(value: string) {
    this._paymentType = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }
}