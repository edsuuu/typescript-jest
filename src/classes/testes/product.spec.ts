import { Product } from '../classe-product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Testando a classe Product', () => {
  afterEach(() => jest.clearAllMocks()); // limpe depois de cada teste

  it('Testando o envio de um objeto', () => {
    const sutObjeto = createSut('Camiseta', 49.9);

    expect(sutObjeto).toHaveProperty('name', 'Camiseta');
    expect(sutObjeto.price).toBeCloseTo(49.9);
  });
});
