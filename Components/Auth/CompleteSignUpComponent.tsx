import { useRouter } from "next/router";

export default function CompleteSignUpComponent() {

    const router = useRouter();
    function onClickCheckBtn() {
        router.push("/auth/login");
    }
    return (
        <div>
            <h1>회원가입에 성공했습니다.</h1>
            <br />
            <button onClick={onClickCheckBtn}>확인</button>
        </div >
    )
}
