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
      {children}
      <Footer />
    </>
  );
}
