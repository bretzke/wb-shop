import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitializerStore from "@/stores/initializerStore";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <InitializerStore />
      <Header />
      <section className="mb-4 max-sm:mb-12">{children}</section>
      <Footer />
    </>
  );
}
