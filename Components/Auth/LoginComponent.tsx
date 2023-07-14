export default function LoginCompoent() {
    return (
        <div>
            <form className="border-2 border-black w-96">
                <h1 className="text-center">로그인 </h1>
                <div>
                    <label>아이디</label>
                    <input type="String" />
                </div>
                <div>
                    <label>비밀번호  </label>
                    <input type="String" />
                </div>
                <button className="border-2 bg-slate-300"> 회원가입</button>
                <button className="border-2 bg-slate-300">로그인</button>
            </form>
        </div >
    )
}
