import AppShellLayout from "@/Components/Layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShellLayout>
      <Component {...pageProps} />
    </AppShellLayout>
  );
}
