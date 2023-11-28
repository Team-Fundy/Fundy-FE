import axios from "axios";
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import fundyColorIcon from '../../public/header/fundycoloricon.png'
import fundyWhiteIcon from '../../public/header/fundywhiteicon.png'
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

    useEffect(() => {
        switch (mode) {
            case "Opacity0":
                setTextcolor("text-white");
                setBgColor("");
                break;
            case "Normal":
                setTextcolor("text-black");
                setBgColor("bg-white");
                break;
            case "Dark":
                setTextcolor("text-white");
                setBgColor("bg-black");
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
                <Link className = "my-auto" href="/auth/login">
                    <p className="">로그인</p>
                </Link>
                < Link href="/auth/login" className ="w-28 h-fit my-auto py-1 text-center text-md text-white bg-[#685BFE] rounded-sm">
                        프로젝트 만들기
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
                        <Link className="my-auto flex gap-2" href="/">
                            <Image src={fundyColorIcon} alt="logo" className={`w-10 h-12`} />
                            <p className ="font-['dalmoori'] text-xl my-auto">FUNDY</p>
                        </Link>
                        <div className="font-bold  text-sm flex gap-10 my-auto">
                         <Link href="/">
                                <p>펀딩</p>
                          </Link>
                          <Link href="/">
                              <p>프로모션</p>
                          </Link>
                          <Link href="/">
                              <p>펀디이야기</p>
                          </Link>
                          <Link href="/">
                              <p>문의사항</p>
                          </Link>
                     </div>
                  </div>
                  <div className='flex gap-4'>
                       <button onClick={() => setOpenSearch(!openSearch)} className="h-12 my-1">
                         <Image src={searchbtn}
                            className="w-8 h-8 my-auto"
                            alt="none"
                        />
                        </button>
                        {login ? <OnLogin /> : <OnLogoff />}
                  </div>
              </div>
              {openSearch ? <SearchComponent /> : null}
            </div>
        </header >
    )
}   