import { useState, useEffect } from "react"
import UserMyPageProjectItem from "./UserMyPageProjectItem";

type UserMyPageContentBoardtype = {
    selectedoption: number,
}

export default function UserMyPageContentBoard({ selectedoption }: UserMyPageContentBoardtype) {

    const [optiontext, setOptiontext] = useState<string>("최근 본 프로젝트");
    const arr = Array.from({ length: 12 }, () => null);
    useEffect(() => {
        switch (selectedoption) {
            case 1:
                setOptiontext("좋아요 표시한 프로젝트");
                break;
            case 2:
                setOptiontext("최근 본 프로젝트");

                break;
            case 3:
                setOptiontext("팔로우 한 크리에이터");

                break;
            case 4:
                setOptiontext("개발노트 - 탭버튼(임시)");
                break;
        }
    }, [selectedoption]);

    return (
        <div className="my-2 w-[74rem] h-fit bg-white my-2 pb-12">
            <p className="font-semibold pl-16 py-6">{optiontext}</p>
            <div className="border-b-2 h-1 w-[66rem] border-gray-300  mx-auto"></div>
            <div className="grid grid-cols-4 gap-4 my-2 px-8">
                {
                    arr.map((i, index) => (<UserMyPageProjectItem key={index} />))
                }
            </div>
        </div>
    )
}