export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public inStock: boolean
  ) {}

  getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }
}
