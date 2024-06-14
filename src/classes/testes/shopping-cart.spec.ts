import { Discount } from '../classe-abstract-discount';
import { CartItemProtocol } from '../interfaces-protocolos/cart-item';
import { ShoppingCartRefatored } from '../shopping-cart-refatorado';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCartRefatored(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItemProtocol {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const item1 = createCartItem('Camiseta', 40);
  const item2 = createCartItem('Blusa', 1);
  sut.addItem(item1);
  sut.addItem(item2);
  return { sut, discountMock };
};

//testes isolados

describe('ShoppingCart ', () => {
  it('o carrinho está vazio antes de eu adicionar produto', () => {
    const { sut } = createSut();
    expect(sut.isEmptyEstaVazio()).toBe(true);
  });

  it('o carrinho deve ter 2 items ', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('Total do carrinho sem desconto e com desconto ', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalComDesconto()).toBe(41);
  });

  it('Adicionando produtos ao Carrinho e Checkagem de carrinho limpo ', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmptyEstaVazio()).toBe(true);
  });

  it('Removendo produtos do carrinho', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });

  it('calculate sendo chamado com o preco com desconto  ', () => {
    const { sut, discountMock } = createSutWithProducts();

    const discountMockSpy = jest.spyOn(discountMock, 'calculate');

    sut.totalComDesconto();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('calculate sendo chamado com o preco total ', () => {
    const { sut, discountMock } = createSutWithProducts();

    const discountMockSpy = jest.spyOn(discountMock, 'calculate');

    sut.totalComDesconto();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
    // expect(sut.totalComDesconto()).toBe(41);
  });
});
