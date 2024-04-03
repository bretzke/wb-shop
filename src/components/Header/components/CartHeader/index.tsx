import { useCartStore } from "@/stores/cartStore";
import { Bag } from "phosphor-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CartHeaderItem from "./components/CartHeaderItem";

export default function CartHeader() {
  const { cart } = useCartStore().state;
  const cartQuantity = cart.reduce(
    (acc, currentProduct) => acc + currentProduct.quantity,
    0
  );

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
      <SheetContent className="bg-secondary text-primary">
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {cart.map(productCart => {
            return (
              <CartHeaderItem key={productCart.id} {...productCart} />
            )
          })}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Finalizar pedido</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
