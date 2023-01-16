import "../styles/globals.css";
import "../styles/nprogress.css";

import type { AppProps } from "next/app";
import { GiWaxTablet } from "react-icons/gi";

import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import Router from "next/router";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { AppContextProvider } from "../src/contexts/global.context";
import Footer from "../components/Footer";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <main className="bg-slate-100">
      <AppContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <div className="bg-black h-[100px] w-full">
          <div className="bg-slate-100 h-full rounded-br-3xl"></div>
        </div>
        <Footer />
      </AppContextProvider>
    </main>
  );
}
