//codigo sujo

/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
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

const menssaging = new Messaging();
const persistency = new Persistency();

const o50deDesconto = new FiftyPercentDiscount();
// const o10deDesconto = new TenPercentDiscount();
// const semDesconto = new NoDiscount();

// injetação de dependencia
const shoppingCart = new ShoppingCartRefatored(o50deDesconto);

const order = new Order(shoppingCart, menssaging, persistency);

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
