import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/Components/Header/Header"
import Sidebar from "@/Components/Sidebar"
//import Footer from '@/Components/footer';
import { RecoilRoot } from "recoil"

import axios from "axios";
axios.defaults.withCredentials = true;


function getHeaderMode(page: string) {
  switch (page) {
    case "creatorpage":
      return "Opacity0";
    case "developnotepage":
      return "Opacity0";
    default:
      return "Normal"
  }
}


export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {

  const headerMode = getHeaderMode(pageProps.layout);
  return (
    <>
      <RecoilRoot>
          <div className="w-screen h-screen bg-[#ECEDF0]">
            <Header mode={headerMode} />
            <Component {...pageProps}></Component>
          </div>
      </RecoilRoot>
    </>
  );
}
