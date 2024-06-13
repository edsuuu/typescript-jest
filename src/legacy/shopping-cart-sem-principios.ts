type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((totalDeItensNoCarrinho, ValorAtualDoCarrinho) => totalDeItensNoCarrinho + ValorAtualDoCarrinho.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmptyEstaVazio()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido está sendo processado com o total de R$ ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmptyEstaVazio(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

const cart = new ShoppingCartLegacy();
cart.addItem({ name: 'Item 1', price: 10.0 });
cart.addItem({ name: 'Item 2', price: 20.0 });
cart.addItem({ name: 'Item 3', price: 30.0 });

console.log('Carrinho: ', cart.items);
console.log('Valor do carrinho: ', cart.total());
console.log();
console.log('Fazendo Chekout: ');
console.log('Status do Carrinho está:', cart.orderStatus);
cart.checkout();
console.log('Status do Carrinho está:', cart.orderStatus);
