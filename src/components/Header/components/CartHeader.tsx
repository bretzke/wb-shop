import { useCartStore } from "@/stores/cartStore";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import { Bag } from "phosphor-react";

export default function CartHeader() {
  const { cart } = useCartStore().state;

  return (
    <Link href={ROUTES.cart} className="relative">
      <Bag size={40} className="text-primary" />
      {cart.length > 0 && <span className="rounded-full bg-primary text-secondary px-2 py-px absolute top-0 -right-4 text-sm">{cart.length}</span>}
    </Link>
  );
}
