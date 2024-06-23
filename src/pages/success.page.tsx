import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICartProduct } from "@/interfaces/ICartProduct";
import { formatNumberToReal } from "@/utils/currency";

interface SuccessProps {
  customerName: string;
  products: ICartProduct[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | WB Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <section className="container flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Pedido Confirmado!</h1>
          <h3 className="text-lg font-semibold">
            Agradecemos pela sua compra, {customerName}!
          </h3>
        </div>

        <Table>
          <TableCaption>O pedido realizado é apenas um teste.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Imagem</TableHead>
              <TableHead>Nome do produto</TableHead>
              <TableHead>Preço unitário</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={product.imageUrl}
                    height={100}
                    width={100}
                    alt={product.name}
                    className="m-auto"
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{formatNumberToReal(product.price)}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  {formatNumberToReal(product.price * product.quantity)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  const products: ICartProduct[] = [];

  session.line_items?.data.forEach((p) => {
    const price = p.price as Stripe.Price;
    const product = p.price?.product as Stripe.Product;
    const priceAmount = price.unit_amount ? price.unit_amount / 100 : 0;

    products.push({
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceAmount,
      priceId: price.id,
      quantity: p.quantity as number,
    });
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
