import { useState } from "react"

export default function SignUpComponent() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const [division, setDivision] = useState("");

    function onClickSignUpBtn() {

    }


    function onClickExitBtn() {

    }



    return (
        <div>
            <form className="border-2 border-black w-96">
                <h1 className="text-center">회원가입 </h1>
                <table>
                    <tr>
                        <th>
                            <label>이름</label>
                        </th>
                        <td>
                            <input type="String" onChange={(event) => setName(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>소속  </label>
                        </th>
                        <td>
                            <input type="String" onChange={(event) => setDivision(event.target.value)} />
                        </td>
                    </tr>
                </table>
                <br />

                <table>
                    <tr>
                        <th>
                            <label>아이디</label>
                        </th>
                        <td>
                            <input type="String" onChange={(event) => setId(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>비밀번호 </label>
                        </th>
                        <td>
                            <input type="String" onChange={(event) => setPw(event.target.value)} />
                        </td>
                    </tr>
                </table>




                <button className="border-2 bg-slate-300" onClick={onClickSignUpBtn}> 회원가입</button>
                <button className="border-2 bg-slate-300" onClick={onClickExitBtn}>취소</button>
            </form>
        </div >
    )
}
