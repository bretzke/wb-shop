import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import CartHeader from "../Header/components/CartHeader";
import { Separator } from "../ui/separator";
import { House } from "phosphor-react";
import ThemeSwitcher from "../ThemeSwitcher";

function IconsSeparator() {
  return <Separator orientation="vertical" className="bg-primary h-8" />;
}

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary flex flex-col items-center justify-center gap-2 fixed bottom-0 left-0 w-full p-2">
      <div className="hidden max-sm:flex gap-4 items-center">
        <Link href={ROUTES.home} className="w-16 flex justify-center">
          <House size={32} />
        </Link>
        <IconsSeparator />
        <ThemeSwitcher />
        <IconsSeparator />
        <CartHeader />
      </div>
      <Link href={ROUTES.linkedin} target="_blank">
        Desenvolvido por: Willian Bretzke
      </Link>
    </footer>
  );
}
