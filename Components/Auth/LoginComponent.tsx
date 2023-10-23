import { useRouter } from "next/router";
import loginbackgroundimg from "@/public/login/loginbackground.png"
import navericon from "@/public/login/navericon.png"
import googleicon from "@/public/login/googleicon.png"

import { accesstokenState, refreshtokenState, loginState } from '@/recoil/recoilstate'
import { useRecoilState } from "recoil";
import Image from "next/image";
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
        <div className="flex w-fit h-fit mx-auto my-28">
            <div className="relative z-0">
                <Image src={loginbackgroundimg} alt="" />
                <div className="absolute h-2 z-2 top-16 left-[7.5rem]">
                    <div className="grid grid-rows-4 gap-4">
                        <h1 className="text-center font-semibold text-2xl my-2 text-[#685BFE]">로그인 </h1>
                        <button id="google" className="text-black" onClick={onClickOauthLoginBtn}><div className="w-96 py-4 bg-white rounded-full flex gap-2 justify-center"><Image src={googleicon} alt="" /><p>Sign in with Google</p></div> </button>
                        <button id="kakao" className="text-black" onClick={onClickOauthLoginBtn}><div className="w-96 py-4 bg-white rounded-full flex gap-2 justify-center"><Image src={navericon} alt="" /><p>Sign in with KaKao</p></div> </button>
                        <button id="naver" className="text-black" onClick={onClickOauthLoginBtn}><div className="w-96 py-4 bg-white rounded-full flex gap-2 justify-center"><Image src={navericon} alt="" /><p>Sign in with Naver</p></div> </button>
                    </div>
                    <form className="my-4" onSubmit={onClickEmailLoginBtn}>
                        <div className="grid gap-2">
                            <label className="text-xl text-black">Email</label>
                            <input className="border-b-2 border-black bg-inherit pb-2" type=" email" name="email" placeholder="이메일 입력" />
                            <label className="text-xl text-black">Password</label>
                            <input className="border-b-2 border-black bg-inherit pb-2" type="password" name="password" placeholder="비밀번호 입력" />
                        </div>
                        <div className="flex gap-5 my-2 text-gray-500">
                            <button className="" onClick={onClickSignUpBtn}> 회원가입</button>
                            <div className="border-l-2 border-gray-400 h-4 mt-1"></div>
                            <button className="" onClick={onClickSignUpBtn}> 아이디 찾기</button>
                            <div className="border-l-2 border-gray-400 h-4 mt-1"></div>
                            <button className="" onClick={onClickSignUpBtn}> 비밀번호 찾기</button>
                        </div>
                        <button className="border-2 bg-[#685BFE] w-96 rounded-lg py-4 my-8 font-semibold text-white text-xl" type="submit">로그인</button>
                    </form>
                </div>
            </div >
        </div >
    )
}
