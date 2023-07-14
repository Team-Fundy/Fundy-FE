import { useState } from "react"

export default function LoginCompoent() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    function onClickLoginBtn() {

    }

    function onClickSignUpBtn() {

    }

    return (
        <div>
            <form className="border-2 border-black w-96">
                <h1 className="text-center">로그인 </h1>
                <div>
                    <label>아이디</label>
                    <input type="String" onChange={(event) => setId(event.target.value)} />
                </div>
                <div>
                    <label>비밀번호  </label>
                    <input type="String" onChange={(event) => setPw(event.target.value)} />
                </div>
                <button className="border-2 bg-slate-300" onClick={onClickSignUpBtn}> 회원가입</button>
                <button className="border-2 bg-slate-300" onClick={onClickLoginBtn}>로그인</button>
            </form>
        </div >
    )
}
