import { IProduct } from "@/interfaces/IProduct";

export default function ProductCard({
  id,
  name,
  defaultPriceId,
  imageUrl,
}: IProduct) {
  return <div>{name}</div>;
}
