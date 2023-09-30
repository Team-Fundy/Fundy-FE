import axios from "axios";
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, use } from 'react'

import fundyicon from '../../public/header/fundyicon.png'
import searchbtn from '../../public/header/searchbtn.png'
import { loginState } from '@/recoil/recoilstate'
import SearchComponent from "./Searchcomponent"
import { useRecoilState } from 'recoil'


type Headertype = {
    mode: string,
}

export default function Header({ mode }: Headertype) {

    //const [login, setLoginState] = useRecoilState(loginState);
    const login = false;
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [textcolor, setTextcolor] = useState<string>("text-black");
    const [bgColor, setBgColor] = useState<string>("bg-white");
    const [imgColor, setImgColor] = useState<string>("");

    useEffect(() => {
        switch (mode) {
            case "Opacity0":
                setTextcolor("text-white");
                setBgColor("");
                setImgColor("invert grayscale brightness-200 saturate-200");
                break;
            case "Normal":
                setTextcolor("text-black");
                setBgColor("bg-white");
                setImgColor("ifilter-none");
                break;
            case "Dark":
                setTextcolor("text-white");
                setBgColor("bg-black");
                setImgColor("invert grayscale brightness-200 saturate-200");
                break;
        }
    }, [mode]);


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
            <div className="flex my-4 gap-4 text-white">
                <button onClick={() => onLogout()}>
                    <p className="font-['dalmoori']">로그아웃</p>
                </button>
                < Link className="" href="/">
                    <p className="my-4 font-['dalmoori']">마이페이지</p>
                </Link>
                < Link className="" href="/">
                    <p className="font-['dalmoori']">프로젝트 등록하기</p>
                </Link>
            </div>
        )
    }
    return (
        <header>
            <div className={`w-full h-16 ${bgColor} ${textcolor} flex justify-around relative z-10 `}>
                <div className="flex gap-24 opacity-100">
                    <Link className="" href="/">
                        <Image src={fundyicon} alt="logo" className={`${imgColor}`} />
                    </Link>
                    <div className="font-['dalmoori'] flex gap-12 my-auto">
                        <Link href="/">
                            <p>장르</p>
                        </Link>
                        <Link href="/">
                            <p>인기</p>
                        </Link>
                        <Link href="/">
                            <p>신규</p>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-16'>
                    <button onClick={() => setOpenSearch(!openSearch)} className="h-12 my-1">
                        <Image src={searchbtn}
                            className={`${imgColor}`}
                            alt="none"
                            height="35" />
                    </button>
                    {login ? <OnLogin /> : <OnLogoff />}
                </div>
            </div>
            {openSearch ? <SearchComponent /> : null}
        </header >
    )
}   