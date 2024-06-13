//codigo sujo

/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services-infraestructure/classe-messaging';
import { Order } from './classes/classe-order';
import { Persistency } from './services-infraestructure/classe-persistency';
import { Product } from './classes/classe-product';
import { ShoppingCartRefatored } from './classes/shopping-cart-refatorado';
import {
  FiftyPercentDiscount,
  // TenPercentDiscount,
  // NoDiscount,
} from './classes/classe-abstract-discount';
import {
  EnterpriseCustomer,
  // IndividualCustomer
} from './classes/classe-customer';

const menssaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer('edsu', 'teles', '111.111.111-11');

const o50deDesconto = new FiftyPercentDiscount();
// const o10deDesconto = new TenPercentDiscount();
// const semDesconto = new NoDiscount();

const enterpriseCustomer = new EnterpriseCustomer('Empresa 1', '111.111.111-11');
// injetação de dependencia
const shoppingCart = new ShoppingCartRefatored(o50deDesconto);

const order = new Order(shoppingCart, menssaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Item 1', 49.9));
shoppingCart.addItem(new Product('Item 2', 9.9123));
shoppingCart.addItem(new Product('Item 3', 1.59));

console.log('Carrinho: ', shoppingCart.items);
console.log('Valor do carrinho: ', shoppingCart.total());
console.log('Valor do carrinho com desconto: ', shoppingCart.totalComDesconto());
console.log();
console.log('Fazendo Chekout: ');
console.log('Status do Carrinho está:', order.orderStatus);
order.checkout();
console.log('Status do Carrinho está:', order.orderStatus);
