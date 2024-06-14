import { CartItemProtocol } from './interfaces-protocolos/cart-item';
import { Discount } from './classe-abstract-discount';
import { ShoppingCartProtocol } from './interfaces-protocolos/shopping-protocol';

export class ShoppingCartRefatored implements ShoppingCartProtocol {
  private readonly _items: CartItemProtocol[] = [];

  constructor(private readonly discount: Discount) {}

  public addItem(item: CartItemProtocol): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItemProtocol[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((totalDeItensNoCarrinho, ValorAtualDoCarrinho) => totalDeItensNoCarrinho + ValorAtualDoCarrinho.price, 0).toFixed(2);
  }

  totalComDesconto(): number {
    return this.discount.calculate(this.total());
  }

  isEmptyEstaVazio(): boolean {
    return this._items.length === 0; // validacao
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}
