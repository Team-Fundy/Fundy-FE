import axios from "axios";
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, use } from 'react'

import fundyicon from '../../public/header/fundyicon.png'
import searchbtn from '../../public/header/searchbtn.png'
import SearchComponent from "./SearchComponent";
//import { useRecoilState } from 'recoil'
//import { loginState } from '@/recoil/recoilstate'


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
            <div className="flex gap-8 my-4 text-sm font-bold">
                <Link href="/auth/login">
                    <p className="">로그인</p>
                </Link>
                < Link href="/auth/login">
                    <p className="">회원가입</p>
                </Link>
            </div>
        )
    }

    const OnLogin = () => {
        return (
            <div className="flex my-4 gap-4 text-white">
                <button onClick={() => onLogout()}>
                    <p>로그아웃</p>
                </button>
                < Link className="" href="/">
                    <p className="my-4">마이페이지</p>
                </Link>
                < Link className="" href="/">
                    <p >프로젝트 등록하기</p>
                </Link>
            </div>
        )
    }

    

    return (
        <header>
            <div className={`w-full h-14 ${bgColor} ${textcolor} relative z-10 `}>
                <div className ="flex w-3/5 justify-between mx-auto">
                    <div className="flex gap-24 opacity-100">
                        <Link className="my-auto" href="/">
                            <Image src={fundyicon} alt="logo" className={`w-20 h-8 ${imgColor}`} />
                        </Link>
                        <div className="font-bold  text-sm flex gap-10 my-auto">
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
            </div>
        </header >
    )
}   