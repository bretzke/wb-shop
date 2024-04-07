import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces/IProduct";
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";

interface IndexProps {
  products: IProduct[];
}

export default function Index({ products }: IndexProps) {
  return (
    <div className="flex gap-4 container py-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const priceAmount = price.unit_amount ? price.unit_amount / 100 : 0;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      defaultPriceId: price.id,
      price: priceAmount,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
