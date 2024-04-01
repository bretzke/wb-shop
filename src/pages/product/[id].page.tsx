import { useRouter } from "next/router";
// import {
//   ImageContainer,
//   ProductContainer,
//   ProductDetails,
// } from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { useContext } from "react";
import Head from "next/head";
import { IProduct } from "@/interfaces/IProduct";
// import { CartContext } from "../../contexts/CartContext";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  // const { addProductToCart, checkIfItemAlreadyExists } =
  //   useContext(CartContext);

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading</p>;
  }

  console.log(product);

  return (
    <>
      <Head>
        <title>{product.name} | WB Shop</title>
      </Head>

      {/* <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={product.name}
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            className="primary"
            onClick={() => addProductToCart(product.defaultPriceId)}
            disabled={checkIfItemAlreadyExists(product.defaultPriceId)}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer> */}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_Pq5EqiMVJ02jeH" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = String(params?.id);

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;
  const priceAmount = price.unit_amount ? price.unit_amount / 100 : 0;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: priceAmount,
        description: product.description
      },
    },
    revalidate: 60 * 60 * 1, // hour
  };
};
