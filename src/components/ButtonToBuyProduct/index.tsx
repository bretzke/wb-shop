import { useCartStore } from "@/stores/cartStore";
import { Button } from "../ui/button";
import { Trash, Plus, Minus } from "phosphor-react";

interface ButtonToBuyProductProps {
  id: string;
  imageUrl: string;
  price: number;
  name: string;
  priceId: string;
}

export default function ButtonToBuyProduct(product: ButtonToBuyProductProps) {
  const {
    state: { cart },
    actions: { addProduct, removeProductQuantity, removeProduct },
  } = useCartStore();

  const productQuantity =
    cart.find((productCart) => productCart.id === product.id)?.quantity || 0;

  function handleAddProduct() {
    addProduct({ ...product, quantity: 1 });
  }

  function handleAddQuantity() {
    addProduct({ ...product, quantity: productQuantity + 1 });
  }

  function handleRemoveQuantity() {
    removeProductQuantity({ ...product, quantity: 1 });
  }

  function handleRemoveProduct() {
    removeProduct(product.id);
  }

  if (!productQuantity) {
    return (
      <Button onClick={handleAddProduct} className="w-full">
        Comprar
      </Button>
    );
  }

  return (
    <div className="flex justify-between items-center w-full gap-2">
      {productQuantity == 1 && (
        <Button onClick={handleRemoveProduct}>
          <Trash size={24} />
        </Button>
      )}
      {productQuantity > 1 && (
        <Button onClick={handleRemoveQuantity}>
          <Minus size={24} />
        </Button>
      )}
      <span>{productQuantity}</span>
      <Button onClick={handleAddQuantity}>
        <Plus size={24} />
      </Button>
    </div>
  );
}
