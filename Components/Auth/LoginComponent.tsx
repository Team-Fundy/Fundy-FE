import { useState } from "react";
import { useQuery } from 'react-query';


export default function LoginCompoent() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");


    const fetchData = async () => {
        const response = await fetch('localhost:3333/api/user/login');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response);
        return response.json();
    };

    fetchData();
    // const { data, isLoading, error } = useQuery('data', fetchData);


    // if (isLoading) {
    //     console.log(data);
    // }

    // if (error) {
    //     return <div>Error</div>;
    // }


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
