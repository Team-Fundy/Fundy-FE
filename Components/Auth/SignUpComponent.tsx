import { useState } from "react"
import { useRouter } from "next/router";

export default function SignUpComponent({ setVisibleCompleteSignup }) {

    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [code, setCode] = useState("");
    const router = useRouter();

    function onClickSendCheckMailBtn() {
        fetch("/api/user/email/code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
            })
        }).then(response => response.json()).then(response => {
            if (response.success === true) {
                setToken(response.result.token);
            }
            else {
                switch (response.message) {
                    case "이메일은 필수 입니다":
                        break;
                }
            }
        });
    }

    function onClickCheckCodeBtn() {
        fetch("http://localhost:8080/api/user/email/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "code": code,
                "token": token,
            })
        }).then(response => response.json()).then(response => {
            if (response.success === true) {

            }
            else {
                switch (response.message) {
                    case "이메일은 필수 입니다":
                        break;
                }
            }
        });
    }

    const onClickSignUpBtn = async (e: any) => {
        e.preventDefault();
        fetch("/api/user/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": e.target.email.value,
                "nickname": e.target.name.value,
                "password": e.target.password.value,
                "profileImage": null,
            })
        }).then(response => response.json()).
            then(response => {
                console.log(response);
                if (response.success === true)              // 회원가입 완료되었을때 
                {
                    setVisibleCompleteSignup(true);
                }

                if (response.success === false)             // 회원가입 실패했을떄 - 중복된 유저 존재 or 비밀번호 규칙
                {
                    switch (response.message) {
                        case '중복된 유저가 존재합니다.':
                            alert('중복된 유저가 존재합니다.');
                            break;
                        case '패턴이 옳지 않습니다':
                            alert('비밀번호에는 영어 대문자, 소문자, 숫자, 특수기호를 포함한 10자 이상 30자내로 만들어주세요.');
                            break;
                    }
                }
            });
    }
    return (
        <div>
            <form onSubmit={onClickSignUpBtn}>
                <h1 className="text-center">회원가입 </h1>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label>닉네임</label>
                            </th>
                            <td>
                                <input type="String" name="nickname" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>소속 </label>
                            </th>
                            <td>
                                <input type="String" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label>이메일</label>
                            </th>
                            <td>
                                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                            </td>
                            <td>
                                <button onClick={onClickSendCheckMailBtn}>이메일 인증</button>
                            </td>
                            <td>
                                <input type="email" onChange={(e) => setCode(e.target.value)} />
                            </td>
                            <td>
                                <button onClick={onClickCheckCodeBtn}>인증코드 확인</button>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>비밀번호 </label>
                            </th>
                            <td>
                                <input type="String" name="password" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="border-2 bg-slate-300" type="submit"> 회원가입</button>
                <button className="border-2 bg-slate-300" onClick={onClickSignUpBtn}>취소</button>
            </form>
        </div >
    )
}
