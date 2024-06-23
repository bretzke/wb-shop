import Image from "next/image";
import logoPng from "@/assets/logo.png";
import logoDarkPng from "@/assets/logo-dark.png";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import CartHeader from "./components/CartHeader";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
  const { theme, systemTheme } = useTheme();
  const logo = useMemo(() => {
    return theme === "dark" || (theme === "system" && systemTheme === "dark")
    ? logoDarkPng
    : logoPng;
  }, [theme, systemTheme]);

  return (
    <header className="flex py-2 px-6 bg-secondary items-center justify-between max-sm:justify-center">
      <Link href={ROUTES.home}>
        <Image width={80} src={logo} alt="" quality={100} />
      </Link>

      <div className="flex items-center max-sm:hidden">
        <ThemeSwitcher />
        <CartHeader />
      </div>
    </header>
  );
}
