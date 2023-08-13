import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginCompoent() {

    const router = useRouter();

    const onClickLoginBtn = async (e: any) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const response = await signIn("email-password-credential", {
            email,
            password,
            redirect: false
        });
        console.log(response);  
    }
    const onClickKakaoBtn = async (e: any) => {
    }
    const onClickNaverBtn = async (e: any) => {
    }
    const onClickGoogleBtn = async (e: any) => {
        signIn('google');
    }

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
