import { useState } from "react"
import { useRouter } from "next/router";

export default function SignUpComponent({ setVisibleCompleteSignup }) {

    const [email, setEmail] = useState<String>("");
    const [token, setToken] = useState<String>("");
    const [nickname, setNickName] = useState<string>("");
    const [code, setCode] = useState<String>("");

    const [hasNickNameExistCheck, setHasNickNameExistCheck] = useState<Boolean>(false);
    const [hasEmailCodeCheck, setHasEmailCodeCheck] = useState<Boolean>(false);
    const [useableNickName, setUseableNickName] = useState<Number>(0);


    function exist_nicknametext() {
        if (useableNickName === 0 || !hasNickNameExistCheck) {                // 초기상태 
            return <p></p>
        }
        else if (useableNickName === 1)              // 1일때 가능 
            return (
                <p className="text-green-200">사용가능한 닉네임입니다.</p>
            );
        else if (useableNickName === 2)         // 2일때 불가능
            return (
                <p className="text-red-200">이미 사용중인 닉네임입니다.</p>
            );
    }
    function onClickExistNickNameCheck()                // 닉네임 중복검사
    {
        let querystring = new URLSearchParams(nickname).toString();
        querystring = querystring.slice(0, -1);
        fetch(`/api/user/check-nickname?nickname=${querystring}`, {
            method: "GET"
        }).then(response => response.json()).then(response => {
            if (response.result.available === true) {
                setUseableNickName(1);
                setHasNickNameExistCheck(true);
            }
            else {
                setUseableNickName(2);
            }
        });
    }

    function onClickSendCheckMailBtn()              // 인증메일전송버튼 
    {
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
                setHasEmailCodeCheck(false);
                console.log(response);
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
        fetch("/api/user/email/verify", {
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
                setHasEmailCodeCheck(true);
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

        if (!hasNickNameExistCheck)                         // 닉네임 중복검사안했을 때
        {
            alert("닉네임 중복검사를 완료해주세요.")
            return;
        }
        if (!hasEmailCodeCheck)                         // 이메일 인증 성공 못했을때 
        {
            alert("이메일 인증 완료해주세요.")
            return;
        }


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
                                <input type="String" name="nickname" onChange={(e) => {
                                    setNickName(e.target.value);
                                    setHasNickNameExistCheck(false);
                                }} />
                            </td>
                            <td>
                                <button className="border-2 border-black" onClick={onClickExistNickNameCheck}>닉네임 중복검사</button>
                            </td>
                            <td>
                                <h1>{exist_nicknametext()}</h1>
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
                                <input onChange={(e) => setCode(e.target.value)} />
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
