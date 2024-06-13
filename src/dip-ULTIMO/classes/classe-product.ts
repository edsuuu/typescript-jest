import { CartItemProtocol } from './interfaces-protocolos/cart-item';

export class Product implements CartItemProtocol {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
