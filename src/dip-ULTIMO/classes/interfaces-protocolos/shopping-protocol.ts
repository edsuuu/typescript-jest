import { CartItemProtocol } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItemProtocol[]>;
  addItem(item: CartItemProtocol): void;
  removeItem(index: number): void;

  total(): number;
  totalComDesconto(): number;

  clear(): void;
  isEmptyEstaVazio(): boolean;
}
