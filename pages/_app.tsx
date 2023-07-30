import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/Components/Header"
import Sidebar from "@/Components/Sidebar"
//import Footer from '@/Components/footer';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <div className="w-screen h-screen flex">
          <Sidebar />
          <div className="w-screen">
            <Header />
            <Component {...pageProps}></Component>
          </div>
        </div>
      </SessionProvider>
    </>
  );
}
