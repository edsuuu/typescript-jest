import { Discount } from './classe-abstract-discount';
import { CartItem } from './interfaces-protocolos/cart-item';

export class ShoppingCartRefatored {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
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
