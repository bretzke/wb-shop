export interface ICheckoutProduct {
  priceId: string;
  quantity: number;
}

export interface IStripeCheckoutProduct {
  price: string;
  quantity: number;
}
