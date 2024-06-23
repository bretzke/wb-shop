import { IProduct } from "@/interfaces/IProduct";
import { stripe } from "@/lib/stripe";

export const getRelatedProducts = async (
  productId: string
): Promise<IProduct[]> => {
  const relatedProductsRequests = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 10,
  });

  const relatedProducts = relatedProductsRequests.data.length
    ? (relatedProductsRequests.data as any[])
    : [];

  return relatedProducts
    .map(
      (relatedProduct) =>
        ({
          id: relatedProduct.id,
          name: relatedProduct.name,
          description: relatedProduct.description,
          imageUrl: relatedProduct.images[0],
          priceId: relatedProduct.default_price.id,
          price: relatedProduct.default_price.unit_amount / 100,
        } as IProduct)
    )
    .filter((relatedProduct) => relatedProduct.id != productId);
};
