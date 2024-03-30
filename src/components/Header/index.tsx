import Image from "next/image";
import logoPng from "@/assets/logo.png";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import CartHeader from "./components/CartHeader";

export default function Header() {
  return (
    <header className="flex py-2 px-6 bg-secondary items-center justify-between">
      <Link href={ROUTES.home}>
        <Image
          width={80}
          src={logoPng}
          alt=""
          quality={100}
        />
      </Link>

      <CartHeader />
    </header>
  );
}
