import { useCartStore } from "@/stores/cartStore";
import { Button } from "../ui/button";
import { Trash, Plus, Minus } from "phosphor-react";

interface ButtonToBuyProductProps {
  productId: string;
}

export default function ButtonToBuyProduct({
  productId,
}: ButtonToBuyProductProps) {
  const {
    state: { cart },
    actions: { addProduct, removeProductQuantity, removeProduct },
  } = useCartStore();

  const productQuantity =
    cart.find((product) => product.id === productId)?.quantity || 0;

  function handleAddProduct() {
    addProduct({ id: productId, quantity: 1 });
  }

  function handleAddQuantity() {
    addProduct({ id: productId, quantity: productQuantity + 1 });
  }

  function handleRemoveQuantity() {
    removeProductQuantity({ id: productId, quantity: 1 });
  }

  function handleRemoveProduct() {
    removeProduct(productId);
  }

  if (!productQuantity) {
    return (
      <Button onClick={handleAddProduct} className="w-full">
        Comprar
      </Button>
    );
  }

  return (
    <div className="flex justify-between items-center w-full">
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
