import type { AppProps } from "next/app";
import "../styles/globals.css";
import DefaultLayout from "@/layout/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
