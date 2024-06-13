//responsavel por fazer o checkout
/*  */

import { Messaging } from '../services-infraestructure/classe-messaging';
import { Persistency } from '../services-infraestructure/classe-persistency';
import { OrderStatus } from './interfaces-protocolos/order-status';
import { ShoppingCartRefatored } from './shopping-cart-refatorado';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    //injecao de depedencias
    private readonly cart: ShoppingCartRefatored,
    private readonly menssaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmptyEstaVazio()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.menssaging.sendMessage(`Seu pedido está sendo processado com o total de R$ ${this.cart.totalComDesconto()} foi recebido`);
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
