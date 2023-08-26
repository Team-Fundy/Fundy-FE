import Link from 'next/link'
import Image from 'next/image'
import fundyicon from '../public/home/fundyicon.png'
import frame from '../public/home/frame.png'
import { loginState } from '@/recoil/recoilstate'
import { useRecoilValue } from 'recoil'
import { onLogout } from './Auth/Login/Logout'

export default function Header() {

    const loginstate = useRecoilValue(loginState);

    const OnLogoff = () => {
        return (
            <div className="flex gap-4">
                <Link href="/auth/login">
                    <p className="font-['dalmoori']">로그인</p>
                </Link>
                < Link href="/auth/login">
                    <p className="font-['dalmoori']">회원가입</p>
                </Link>
            </div>
        )
    }

    const OnLogin = () => {
        return (
            <div className="flex gap-4">
                <button onClick = {()=>onLogout()}>
                    <p className="font-['dalmoori']">로그아웃</p>
                </button>
                < Link href="/">
                    <p className="font-['dalmoori']">마이페이지</p>
                </Link>
            </div>
        )
    }
    return (
        <header className="w-full h-16 bg-slate-100 flex justify-between">
            <Link className="gap-2" href="/">
                <Image src={fundyicon} alt="logo" />
            </Link>
            <div className="h-12">
                <Image src={frame}
                    alt="none"
                    width={300}
                    height="30" />
            </div>
            {loginstate ? <OnLogin /> : <OnLogoff />}
        </header >
    )
}   