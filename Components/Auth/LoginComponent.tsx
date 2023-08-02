import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";

export default function LoginCompoent() {

    const onClickLoginBtn = async (e: any) => {
        e.preventDefault();
        // Form 안에서 이메일, 패스워드 가져오기


        const email = e.target.email.value;
        const password = e.target.password.value;
        const response = await signIn("email-password-credential", {
            email,
            password,
            redirect: false
        });
        console.log(response);
    }


    function onClickSignUpBtn() {

    }

    return (
        <div>
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
