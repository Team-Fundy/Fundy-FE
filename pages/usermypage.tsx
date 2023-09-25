import UserMyPageProfile from "@/Components/user/mypage/UserMyPageProfile";
import UserMyPageUpbar from "@/Components/user/mypage/userMyPageUpbar";
import UserMyPageContentBoard from "@/Components/user/mypage/UserMyPageContentBoard";
import { useState } from "react";


export default function Usermypage() {
    const [selectedOption, setSelectedOption] = useState<number>(1);

    return (<div>
        <div className="flex justify-center gap-4 my-6">
            <UserMyPageProfile />
            <div>
                <UserMyPageUpbar setOption={setSelectedOption} />
                <UserMyPageContentBoard selectedoption={selectedOption} />
            </div>
        </div>
    </div>);
}