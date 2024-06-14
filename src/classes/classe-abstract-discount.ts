export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

// 50% de desconto
export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

// 50% de desconto
export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

// Sem desconto
export class NoDiscount extends Discount {}
