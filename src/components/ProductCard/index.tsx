import { IProduct } from "@/interfaces/IProduct";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { formatNumberToReal } from "@/utils/currency";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import ButtonToBuyProduct from "../ButtonToBuyProduct";

export default function ProductCard({ id, name, price, imageUrl, priceId }: IProduct) {
  return (
    <Card className="w-52 flex flex-col justify-between">
      <Link
        href={ROUTES.product(id)}
        className="flex flex-col grow justify-between"
      >
        <CardHeader className="p-2">
          <Image src={imageUrl} width={200} height={200} alt="" className="max-h-48" />
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-2">
          <CardTitle className="text-lg leading-tight">{name}</CardTitle>
          <CardDescription className="text-lg font-semibold">{formatNumberToReal(price)}</CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        <ButtonToBuyProduct id={id} imageUrl={imageUrl} name={name} price={price} priceId={priceId} />
      </CardFooter>
    </Card>
  );
}
