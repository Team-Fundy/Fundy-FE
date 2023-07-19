import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/Components/Header"
import Sidebar from "@/Components/Sidebar"
import Footer from '@/Components/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-screen h-screen flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <Component {...pageProps}></Component>
        </div>
      </div>
      <Footer />
    </>
  );
}
