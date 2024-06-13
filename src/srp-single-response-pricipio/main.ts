//codigo sujo

import { Messaging } from './services-infraestructure/classe-messaging';
import { Order } from './entities/classe-order';
import { Persistency } from './services-infraestructure/classe-persistency';
import { Product } from './entities/classe-product';
import { ShoppingCartRefatored } from './entities/shopping-cart-refatorado';

const menssaging = new Messaging();
const persistency = new Persistency();
const shoppingCart = new ShoppingCartRefatored();

const order = new Order(shoppingCart, menssaging, persistency);

shoppingCart.addItem(new Product('Item 1', 10.0));
shoppingCart.addItem(new Product('Item 2', 20.0));
shoppingCart.addItem(new Product('Item 3', 30.0));

console.log('Carrinho: ', shoppingCart.items);
console.log('Valor do carrinho: ', shoppingCart.total());
console.log();
console.log('Fazendo Chekout: ');
console.log('Status do Carrinho está:', order.orderStatus);
order.checkout();
console.log('Status do Carrinho está:', order.orderStatus);
