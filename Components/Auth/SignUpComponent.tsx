import { useState } from "react"

export default function SignUpComponent() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const [division, setDivision] = useState("");

    const onClickSignUpBtn = () => {
        fetch("/api/user/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": id,
                "nickname": name,
                "password": pw,
                "profileImage": null,
            })
        }).then(response => response.json()).
            then(response => {
                console.log(response);
            });
    }
    return (
        <div>
            <h1 className="text-center">회원가입 </h1>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <label>닉네임</label>
                        </th>
                        <td>
                            <input type="String" name="nickname" onChange={(event) => setName(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>소속   </label>
                        </th>
                        <td>
                            <input type="String" onChange={(event) => setDivision(event.target.value)} />
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
                            <input type="String" name="email" onChange={(event) => setId(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>비밀번호 </label>
                        </th>
                        <td>
                            <input type="String" name="password" onChange={(event) => setPw(event.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="border-2 bg-slate-300" onClick={onClickSignUpBtn}> 회원가입</button>
            <button className="border-2 bg-slate-300" onClick={onClickSignUpBtn}>취소</button>
        </div >
    )
}
