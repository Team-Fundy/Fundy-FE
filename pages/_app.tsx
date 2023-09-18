import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/Components/Header/Header"
import Sidebar from "@/Components/Sidebar"
//import Footer from '@/Components/footer';
import { RecoilRoot } from "recoil"

import axios from "axios";
axios.defaults.withCredentials = true;

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <div className="w-screen h-screen flex">
          <div className="w-screen">
            <Header />
            <Component {...pageProps}></Component>
          </div>
        </div>
      </RecoilRoot>
    </>
  );
}
