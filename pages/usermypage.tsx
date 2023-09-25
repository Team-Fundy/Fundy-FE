import UserMyPageProfile from "@/Components/user/mypage/UserMyPageProfile";
import UserMyPageUpbar from "@/Components/user/mypage/userMyPageUpbar";
import { useState } from "react";


export default function Usermypage() {
    const [selectedOption, setSelectedOption] = useState<number>(1);

    return (<div>
        <div className="flex justify-center gap-4 my-6">
            <UserMyPageProfile />
            <UserMyPageUpbar setOption={setSelectedOption} />
        </div>
    </div>);
}