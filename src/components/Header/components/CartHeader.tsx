import { useCartStore } from "@/stores/cartStore";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import { Bag } from "phosphor-react";

export default function CartHeader() {
  const { cart } = useCartStore().state;
  const cartQuantity = cart.reduce(
    (acc, currentProduct) => acc + currentProduct.quantity,
    0
  );

  return (
    <Link href={ROUTES.cart} className="relative">
      <Bag size={40} className="text-primary" />
      {cartQuantity > 0 && (
        <span className="rounded-full bg-primary text-secondary px-2 py-px absolute top-0 -right-4 text-sm">
          {cartQuantity}
        </span>
      )}
    </Link>
  );
}
