import Image from "next/image";
import logoPng from "@/assets/logo.png";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import CartHeader from "./components/CartHeader";
import ConfigurationButton from "../ConfigurationButton";

export default function Header() {
  return (
    <header className="flex py-2 px-6 bg-secondary items-center justify-between max-sm:justify-center">
      <Link href={ROUTES.home}>
        <Image width={80} src={logoPng} alt="" quality={100} />
      </Link>

      <div className="flex items-center max-sm:hidden">
        <ConfigurationButton />
        <CartHeader />
      </div>
    </header>
  );
}
