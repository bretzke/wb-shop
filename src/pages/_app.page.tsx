import type { AppProps } from "next/app";
import "../styles/globals.css";
import DefaultLayout from "@/layout/DefaultLayout";
import ThemeProvider from "@/components/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
