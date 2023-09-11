import { useRouter } from "next/router";
import { useState } from 'react';
import { accesstokenState, refreshtokenState, loginState } from '@/recoil/recoilstate'
import { useRecoilState } from "recoil";
import axios from "axios";

type queryParamValueType = {
    access: string,
    refresh: string,
    grant: string,
}

export default function LoginCompoent() {

    const router = useRouter();
    // const [grant, setGrant] = useState<string | null>(null);
    const [access, setAccess] = useRecoilState(accesstokenState);
    const [refresh, setRefresh] = useRecoilState(refreshtokenState);
    const [loginstate, setLoginState] = useRecoilState(loginState);

    const onLoginSuccess = (acc: string, ref: string, grt: string) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${acc}`;

        setAccess(acc);
        // setGrant(grt);
        setRefresh(ref);
        setLoginState(true);
    }

    const onClickEmailLoginBtn = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        axios.post('/api/user/login', data)
            .then((response: any) => { onLoginSuccess(response.data.result.access, response.data.result.refresh, response.data.result.grant) })
            .catch((response: any) => {
                switch (response.response.status) {
                    case 401:
                        alert("아이디 또는 패스워드가 틀렸습니다.");
                        break;
                }
            });
    }

    const onClickOauthLoginBtn = async (event: React.MouseEvent) => {
        window.open(`/api/user/oauth2/login/${event.target.id}`, 'pop01', 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no');
        window.parentCallback = (queryParamValue: queryParamValueType) => {
            onLoginSuccess(queryParamValue.access, queryParamValue.refresh, queryParamValue.grant);
            router.push('/');
        }
    }

    function onClickSignUpBtn() {
        router.push("/auth/signup");
    }


    return (
        <div>
            <div className="flex gap-4">
                <button id="kakao" className="text-black" onClick={onClickOauthLoginBtn}>카카오 로그인 </button>
                <button id="naver" className="text-black" onClick={onClickOauthLoginBtn}>네이버 로그인 </button>
                <button id="google" className="text-black" onClick={onClickOauthLoginBtn}>구글 로그인 </button>
            </div>
            <form className="border-2 border-black w-96" onSubmit={onClickEmailLoginBtn}>
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
