import { useState } from "react";
import { useCartStore } from "@/stores/cartStore";
import { Bag } from "phosphor-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CartHeaderItem from "./components/CartHeaderItem";
import axios from "axios";
import { formatNumberToReal } from "@/utils/currency";

export default function CartHeader() {
  const { cart } = useCartStore().state;
  const { extractCheckoutData } = useCartStore().actions;
  const [isCreatingSession, setIsCreatingSession] = useState(false);
  const cartQuantity = cart.reduce(
    (acc, currentProduct) => acc + currentProduct.quantity,
    0
  );
  const cartTotalValue = cart.reduce(
    (acc, currentProduct) =>
      acc + currentProduct.price * currentProduct.quantity,
    0
  );

  async function handleFinalizeOrder() {
    try {
      setIsCreatingSession(true);

      const response = await axios.post("/api/checkout", {
        cartProducts: extractCheckoutData(),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="relative">
          <Bag size={40} className="text-primary" />
          {cartQuantity > 0 && (
            <span className="rounded-full bg-primary text-secondary px-2 py-px absolute top-0 -right-1 text-sm">
              {cartQuantity}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-secondary text-primary overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {!cart.length && <h3>Carrinho vazio.</h3>}
          {cart.map((productCart) => (
            <CartHeaderItem key={productCart.id} {...productCart} />
          ))}
        </div>
        <SheetFooter>
          {cart.length > 0 && (
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-right">
                Total: {formatNumberToReal(cartTotalValue)}
              </h3>
              <Button
                disabled={isCreatingSession}
                onClick={handleFinalizeOrder}
              >
                Finalizar pedido
              </Button>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
