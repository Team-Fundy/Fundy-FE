import UserMyPageProjectItem from "../user/mypage/UserMyPageProjectItem";

export default function CreatorMyPageContentBoard() {

    const optiontext = "내 프로젝트 리스트";
    const arr = Array.from({ length: 12 }, () => null);

    return (
        <div className="my-2 w-[68rem] h-fit bg-white my-2 pb-12">
            <p className="font-semibold pl-16 py-8">{optiontext}</p>
            <div className="border-b-2 h-1 w-[62rem] border-gray-300  mx-auto"></div>
            <div className="grid grid-cols-3 gap-4 ml-4 my-2 px-8">
                {
                    arr.map((i, index) => (<UserMyPageProjectItem key={index} />))
                }
            </div>
        </div>
    )
}