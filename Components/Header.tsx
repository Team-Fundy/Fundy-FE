import Link from 'next/link'
import Image from 'next/image'
import fundyicon from '../public/home/fundyicon.png'
import frame from '../public/home/frame.png'
import { loginState } from '@/recoil/recoilstate'
import { useRecoilState } from 'recoil'
import axios from "axios";

export default function Header() {

    //  const [login, setLoginState] = useRecoilState(loginState);
    const login = false;

    const onLogout = () => {
        // setLoginState(false);
        axios.post('/api/user/logout')
            .then()
            .catch();
    }

    const OnLogoff = () => {
        return (
            <div className="flex gap-8 my-4">
                <Link href="/auth/login">
                    <p className="text-black font-['dalmoori']">로그인</p>
                </Link>
                < Link href="/auth/login">
                    <p className="text-black font-['dalmoori']">회원가입</p>
                </Link>
            </div>
        )
    }

    const OnLogin = () => {
        return (
            <div className="flex my-4 gap-4">
                <button onClick={() => onLogout()}>
                    <p className="text-black font-['dalmoori']">로그아웃</p>
                </button>
                < Link className="text-black" href="/">
                    <p className="my-4 font-['dalmoori']">마이페이지</p>
                </Link>
                < Link className="text-black" href="/">
                    <p className="font-['dalmoori']">프로젝트 등록하기</p>
                </Link>
            </div>
        )
    }
    return (
        <header className="w-full h-16 bg-slate-100 flex place-content-center gap-96">
            <Link className="" href="/">
                <Image src={fundyicon} alt="logo" />
            </Link>
            <div className='flex gap-16'>
                <div className="h-12 my-4">
                    <Image src={frame}
                        alt="none"
                        width={300}
                        height="30" />
                </div>
                {login ? <OnLogin /> : <OnLogoff />}
            </div>
        </header >
    )
}   