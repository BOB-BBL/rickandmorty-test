import { FavoriteCharacters } from "@/components/FavoriteCharacters";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FavoriteCharacters />
      <Component {...pageProps} />
    </>
  );
}
