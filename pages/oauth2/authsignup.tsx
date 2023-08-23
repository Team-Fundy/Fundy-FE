const authsignup = () => {

    function onClickSignUpBtn() {
        window.close();

    }
    function onClickExitpBtn() {
        window.close();
    }

    return (
        <div>
            <p className="align-center">구글 로그인 연동</p>
            <pre className="border-2 my-4 border-slate-600"> 이용약관 <br />
                이용약관 <br />이용약관 <br />이용약관 <br />이용약관 <br />이용약관 <br />이용약관 <br />이용약관 <br />이용약관 <br />이용약관 <br />이용약관 <br />이용약관 <br />

            </pre>
            <div className="align-center flex gap-4">
                <button onClick={onClickSignUpBtn} className="border-2 w-24 bg-slate-300">확인</button>
                <button onClick={onClickExitpBtn} className="border-2 w-24 bg-slate-300">취소</button>
            </div>
        </div >
    )
}

export default authsignup;