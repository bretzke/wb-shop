import ButtonToBuyProduct from "@/components/ButtonToBuyProduct";
import { ICartProduct } from "@/interfaces/ICartProduct";
import { formatNumberToReal } from "@/utils/currency";
import Image from "next/image";

export default function CartHeaderItem(product: ICartProduct) {
  return (
    <div className="flex items-center gap-4 shadow-lg p-4 rounded-md">
      <div className="w-2/6">
        <Image src={product.imageUrl} height={100} width={100} alt={product.name} />
      </div>
      <div className="w-2/3 flex flex-col gap-2">
        <h1>{product.name}</h1>
        <h3 className="font-bold">
          {formatNumberToReal(product.price * product.quantity)}
        </h3>
        <ButtonToBuyProduct {...product} />
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
}
