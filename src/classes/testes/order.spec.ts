import { Order } from '../classe-order';
import { CartItemProtocol } from '../interfaces-protocolos/cart-item';
import { CustumerOrderProtocol } from '../interfaces-protocolos/customer-protocol';
import { MensagemProtocol } from '../interfaces-protocolos/mensagem-protocol';
import { PersistencyProtocol } from '../interfaces-protocolos/persistency-protocol';
import { ShoppingCartProtocol } from '../interfaces-protocolos/shopping-protocol';

class ChoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItemProtocol[]> {
    return [];
  }

  addItem(item: CartItemProtocol): void { }
  removeItem(index: number): void { }
  total(): number { return 1 }
  totalComDesconto(): number { return 2 }
  clear(): void { }
  isEmptyEstaVazio(): boolean { return false }

};

class MenssagingMock implements MensagemProtocol {
  sendMessage(msg: string): void { }
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void { }
}

class CustomerMock implements CustumerOrderProtocol {
  getName(): string { return 'Vamoo' }
  getIDN(): string { return 'PASSAR' }
}

const makeSut = () => {
  const cart = new ChoppingCartMock();
  const menssaging = new MenssagingMock();
  const persistency = new PersistencyMock();
  const customer = new CustomerMock();
  const sut = new Order(cart, menssaging, persistency, customer);

  return { sut, cart, menssaging, persistency, customer };
};

describe('Testando classe Order', () => {
  it('Testando classe Order se nao vai finalizar uma compra se o carrrinho estiver vazio, deve retornar o status do pedido como open', () => {
    const { sut, cart } = makeSut();
    //troca a ordem do carrinho
    const cartMock = jest.spyOn(cart, 'isEmptyEstaVazio').mockReturnValue(true);
    sut.checkout();
    expect(cartMock).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  })

  it('Testando classe Order vai finalizar a compra e dizer o nome do cliente , deve retornar o status do pedido como closed', () => {
    const { sut, cart } = makeSut();
    //troca a ordem do carrinho
    const cartMock = jest.spyOn(cart, 'isEmptyEstaVazio').mockReturnValue(false);
    sut.checkout();
    expect(cartMock).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  })

  it('Testando classe Order testando envio de email', () => {
    const { sut, menssaging } = makeSut();
    const menssagingMock = jest.spyOn(menssaging, 'sendMessage');
    sut.checkout();
    expect(menssagingMock).toHaveBeenCalledTimes(1);
  })

  it('Testando classe Order salvando ordem', () => {
    const { sut, persistency } = makeSut();
    const persistencyMock = jest.spyOn(persistency, 'saveOrder');
    sut.checkout();
    expect(persistencyMock).toHaveBeenCalledTimes(1);
  })

})

