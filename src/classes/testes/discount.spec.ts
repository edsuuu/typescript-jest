import { Discount, FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from '../classe-abstract-discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); // limpe depois de cada teste

  it('Nao tem o desconto', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('tem 50% de desconto', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('tem 10% de desconto', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
