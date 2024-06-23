import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import {
  ICheckoutProduct,
  IStripeCheckoutProduct,
} from "@/interfaces/ICheckoutProduct";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cartProducts } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!cartProducts) {
    return res.status(400).json({ error: "Products price ID not found." });
  }

  const sucessUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const line_items: IStripeCheckoutProduct[] = [];

  cartProducts.forEach((cartProduct: ICheckoutProduct) => {
    line_items.push({
      price: cartProduct.priceId,
      quantity: cartProduct.quantity,
    });
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
