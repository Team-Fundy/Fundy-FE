import axios from "axios";
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import fundyColorIcon from '../../public/header/fundycoloricon.png'
import fundyWhiteIcon from '../../public/header/fundywhiteicon.png'
import whiteSearchIcon from '../../public/header/whiteSearchIcon.png'
import graySearchIcon from '../../public/header/graySearchIcon.png'

import whitealarmicon from '../../public/header/whitealarmicon.png'
import blackalarmicon from '../../public/header/blackalarmicon.png'
import whitemypageicon from '../../public/header/whitemypageicon.png'
import blackmypageicon from '../../public/header/blackmypageicon.png'

import SearchComponent from "./SearchComponent";
//import { useRecoilState } from 'recoil'
//import { loginState } from '@/recoil/recoilstate'


type Headertype = {
    mode: string,
}

export default function Header({ mode }: Headertype) {

    //const [login, setLoginState] = useRecoilState(loginState);
    const login = true;
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [textcolor, setTextcolor] = useState<string>("text-black");
    const [bgColor, setBgColor] = useState<string>("bg-white");
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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
                setIsDarkMode(true);
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
                <Link className = "my-auto" href="/auth/login">
                    <p className="">로그인</p>
                </Link>
        )
    }

    const OnLogin = () => {
        return (
            <div className ="flex gap-4">
                <button className ="my-auto w-8 h-8" onClick={() => onLogout()}>
                    <Image src={isDarkMode? whitealarmicon : blackalarmicon } alt="alarm"/>
                </button>
                 <button className ="my-auto w-8 h-8" onClick={() => onLogout()}>
                    <Image src={isDarkMode ? whitemypageicon :blackmypageicon} alt="mypage"/>
                </button>
            </div>
            ) 
    }

    

    return (
        <header>
            <div className={`w-full h-14 ${bgColor} ${textcolor} relative z-10 `}>
                <div className ="flex w-3/5 justify-between mx-auto">
                    <div className="flex gap-24 opacity-100">
                        <Link className="my-auto flex gap-2" href="/">
                            <Image src={isDarkMode ? fundyWhiteIcon : fundyColorIcon} alt="logo" className={`w-10 h-12`} />
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
                         <Image src={isDarkMode? whiteSearchIcon: graySearchIcon}
                            className="w-8 h-8 my-auto mt-2"
                            alt="none"
                        />
                        </button>
                    <div className="flex gap-4 my-4 text-sm font-bold">
                        {login ? <OnLogin /> : <OnLogoff />}
                        < Link href="/auth/login" className ={`w-fit h-fit my-auto py-2 px-4 mx-2 text-center text-sm ${isDarkMode ?'text-[#685BFE] bg-white' :'text-white bg-[#685BFE]'} rounded-sm`}>
                            프로젝트 만들기
                        </Link>
                    </div>
                  </div>
              </div>
              {openSearch ? <SearchComponent /> : null}
            </div>
        </header >
    )
}   