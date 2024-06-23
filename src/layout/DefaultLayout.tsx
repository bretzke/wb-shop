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
      <section className="container mt-6 pb-14 max-sm:pb-28">{children}</section>
      <Footer />
    </>
  );
}
