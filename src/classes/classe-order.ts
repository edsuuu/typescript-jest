//responsavel por fazer o checkout
/*  */

import { PersistencyProtocol } from './interfaces-protocolos/persistency-protocol';
import { CustumerOrderProtocol } from './interfaces-protocolos/customer-protocol';
import { MensagemProtocol } from './interfaces-protocolos/mensagem-protocol';
import { OrderStatus } from './interfaces-protocolos/order-status';
import { ShoppingCartProtocol } from './interfaces-protocolos/shopping-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    //injecao de depedencias
    private readonly cart: ShoppingCartProtocol,
    private readonly menssaging: MensagemProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustumerOrderProtocol,
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

    console.log(`o cliente é: ${this.customer.getName()},  ${this.customer.getIDN()}.`);
  }
}
