import LoginCompoent from "@/Components/Auth/LoginComponent"
import Image from "next/image"
import loginbgImg from "@/public/login/loginbg.png"
import loginMidEffect from "@/public/login/mideffect.png"

export async function getServerSideProps() {
    return { props: { layout: "creatorpage", } };
}

export default function Login() {
    return (
        <div className="relative z-1">
            <div className="flex relative z-0 -top-16">
                <Image src={loginbgImg} alt="" className="w-1/2 h-screen" />
                <div className="bg-slate-100 w-1/2 h-screen">
                    <LoginCompoent />
                </div>
            </div>
        </div>
    )
}

//<Image alt="" src={loginMidEffect} className="relative z-1 left-0" />
//