import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { onLogin, onUserCheck } from "./Login/Login";
import { useRecoilState } from 'recoil'
import { authPopupState } from "@/recoil/recoilstate"


export default function LoginCompoent() {

    const router = useRouter();
    const [popup, setPopup] = useRecoilState(authPopupState);

    const onClickLoginBtn = async (e: any) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const response = onLogin(email, password);
    }
    const onClickKakaoBtn = async (e: any) => {
        onUserCheck();
    }
    const onClickNaverBtn = async (e: any) => {
    }
    const onClickGoogleBtn = async (e: any) => {
        const google_popup = window.open('/api/user/oauth2/login/google', 'pop01', 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no');
        setPopup(google_popup);
    }
    // useEffect(() => {
    //     const currentUrl = window.location.href;
    //     console.log(currentUrl);
    //     const searchParams = new URL(currentUrl).searchParams;
    //     console.log(searchParams);

    //     const code = searchParams.get("code");
    //     console.log(code);

    //     if (code) {
    //         window.opener.postMessage({ code }, window.location.origin);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (!popup) {
    //         return;
    //     }

    //     const googleAuthListener = (e) => {
    //         // 동일한 Origin 의 이벤트만 처리하도록 제한
    //         if (e.origin !== window.location.origin) {
    //             return;
    //         }
    //         const { code } = e.data;
    //         if (code) {
    //             console.log(`The popup URL has URL code param = ${code}`);
    //         }
    //         popup?.close();
    //         setPopup(null);
    //     };

    //     window.addEventListener("message", googleAuthListener, false);

    //     return () => {
    //         window.removeEventListener("message", googleAuthListener);
    //         popup?.close();
    //         setPopup(null);
    //     };
    // }, [popup]);

    function onClickSignUpBtn() {
        router.push("/auth/signup");
    }

    return (
        <div>
            <div className="flex gap-4">
                <button className="text-black" onClick={onClickKakaoBtn}>카카오 로그인 </button>
                <button className="text-black" onClick={onClickNaverBtn}>네이버 로그인 </button>
                <button className="text-black" onClick={onClickGoogleBtn}>구글 로그인 </button>
            </div>
            <form className="border-2 border-black w-96" onSubmit={onClickLoginBtn}>
                <h1 className="text-center">로그인 </h1>
                <div>
                    <label>아이디</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>비밀번호  </label>
                    <input type="password" name="password" />
                </div>
                <button className="border-2 bg-slate-300" onClick={onClickSignUpBtn}> 회원가입</button>
                <button className="border-2 bg-slate-300" type="submit">로그인</button>
            </form>
        </div >
    )
}
