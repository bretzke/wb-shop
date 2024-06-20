import ProductCarousel from "@/components/ProductCarousel";
import { IProduct } from "@/interfaces/IProduct";
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Stripe from "stripe";

interface IndexProps {
  products: IProduct[];
}

export default function Index({ products }: IndexProps) {
  return (
    <>
      <NextSeo
        title="Home | WB Shop"
        description="O seu produto está aqui na WB Shop."
      />
      <div className="container">
        <h1 className="mt-4 mx-auto text-2xl w-fit border-b-2 border-primary pb-1 mb-8 font-bold ">
          Todos os produtos
        </h1>
        <div className="flex gap-4  py-8">
          <ProductCarousel products={products} />
        </div>
      </div>
    </>
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
