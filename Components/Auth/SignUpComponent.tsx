import { useState } from "react"
import loginbackgroundimg from "@/public/login/loginbackground.png"
import Image from "next/image";

type SignUpComponentType = {
    setVisibleCompleteSignup: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SignUpComponent({ setVisibleCompleteSignup }: SignUpComponentType) {

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

    const onClickSignUpBtn = async (e: React.FormEvent) => {
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
        <div className="w-screen h-screen">
            <div className="relative z-0 w-fit mx-auto my-auto">
                <Image src={loginbackgroundimg} className="w-[41rem] h-[57rem]" alt="" />
                <div className="absolute h-2 z-2 top-12 left-[7.5rem]">
                    <h1 className="text-center font-semibold text-2xl my-4 text-[#685BFE]">이메일 간편 가입 </h1>
                    <form className="my-20" onSubmit={onClickSignUpBtn}>
                        <div className="grid gap-2">
                            <label className="text-xl text-black">Email</label>
                            <div>
                                <input className="border-b-2 w-72 border-black bg-inherit pb-2" type=" email" name="email" placeholder="이메일 입력" />
                                <button className="ml-2 bg-purpleblue text-white px-6 h-10 rounded-md text-bold" onClick={onClickSendCheckMailBtn}>인증하기</button>
                            </div>
                            <label className="text-xl text-black">Nickname</label>
                            <input className="border-b-2 border-black bg-inherit pb-2  mb-4" type="password" name="password" placeholder="이름 입력" />
                            <label className="text-xl text-black">Password</label>
                            <input className="border-b-2 border-black bg-inherit pb-2" type="password" name="password" placeholder="비밀번호 입력" />
                            <input className="border-b-2 border-black bg-inherit pb-2 my-4" type="password" name="password" placeholder="비밀번호 재확인" />
                        </div>
                        <div className="flex gap-2 mt-4">
                            <input type="checkbox" className="w-6 h-6 mt-1" />
                            <p className="font-semibold text-2xl">전체 동의</p>
                        </div>
                        <p className="ml-6 text-[0.6rem] w-[22rem] py-2">문장 사용하는 때 지칭하는 결과물에 분야에서 같은 채움 프로젝트 로렘 공간만 지칭하는 사용할 때로 최종 출판이나 용어로도 때 용어로도 최종 글로도 지칭하는 사용할 로렘...</p>
                        <button className="border-2 bg-[#685BFE] w-96 rounded-lg py-3 my-4 font-semibold text-white text-xl" type="submit" onClick={onClickSignUpBtn}>완료</button>
                    </form>
                </div>
            </div >
        </div>
    )
}
