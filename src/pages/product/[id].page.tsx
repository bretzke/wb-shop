import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";
import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import ButtonToBuyProduct from "@/components/ButtonToBuyProduct";
import { formatNumberToReal } from "@/utils/currency";
import ProductSkeleton from "./components/ProductSkeleton";
import ProductCarousel from "@/components/ProductCarousel";
import { getRelatedProducts } from "@/services/productsService";

interface ProductProps {
  product: IProduct;
  relatedProducts: IProduct[];
}

export default function Product({ product, relatedProducts }: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <ProductSkeleton />;
  }

  return (
    <>
      <Head>
        <title>{product.name} | WB Shop</title>
      </Head>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-around max-lg:flex-col gap-4">
          <div className="flex justify-center w-80">
            <Image
              src={product.imageUrl}
              width={300}
              height={480}
              alt={product.name}
            />
          </div>
          <div className="flex flex-col gap-4 max-w-lg shadow-lg p-8 rounded-md">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <h2 className="text-2xl font-bold">
              {formatNumberToReal(product.price)}
            </h2>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium border-b">Descrição</h3>
              <p>{product.description}</p>
            </div>

            <ButtonToBuyProduct {...product} />
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="flex flex-col gap-8">
            <h1 className="mx-auto text-2xl w-fit border-b-2 border-primary pb-1 font-bold">
              Outros produtos
            </h1>

            <ProductCarousel products={relatedProducts} />
          </div>
        )}
      </div>
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
  try {
    const productId = String(params?.id);

    const [product, relatedProducts] = await Promise.all([
      stripe.products.retrieve(productId, {
        expand: ["default_price"],
      }),
      getRelatedProducts(productId),
    ]);

    const price = product.default_price as Stripe.Price;
    const priceAmount = price.unit_amount ? price.unit_amount / 100 : 0;

    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: priceAmount,
          priceId: price.id,
          description: product.description,
        },
        relatedProducts: relatedProducts,
      },
      revalidate: 60 * 60 * 24, // 1 day
    };
  } catch {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
