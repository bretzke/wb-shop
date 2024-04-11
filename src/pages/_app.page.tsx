import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import DefaultLayout from "@/layout/DefaultLayout";
import ThemeProvider from "@/components/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://wb-shop-seven.vercel.app/",
          siteName: "WB Shop",
        }}
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}
