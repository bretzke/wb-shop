import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces/IProduct";
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";

interface IndexProps {
  products: IProduct[];
}

export default function Index({ products }: IndexProps) {
  console.log(products);
  return (
    <div>
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

  console.log(response);

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      defaultPriceId: price.id,
      // price: new Intl.NumberFormat("pt-BR", {
      //   style: "currency",
      //   currency: "BRL",
      // }).format(price.unit_amount / 100), // o preço é salvo em centavos no BD do stripe
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // cria um novo cache dessa página a cada 2 horas
  };
};
