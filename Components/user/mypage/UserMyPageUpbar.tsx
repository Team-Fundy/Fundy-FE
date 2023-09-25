
// <div className="border-4 border-black w-1 h-8 my-auto"></div>
type UserMyPageUpbartype = {
    setOption: React.Dispatch<React.SetStateAction<number>>
}

export default function UserMyPageUpbar({ setOption }: UserMyPageUpbartype) {

    return (
        <div className="flex font-semibold font-sm gap-8 w-[74rem] h-16 bg-white pl-16">
            <button onClick={() => setOption(1)}>좋아요 표시한 프로젝트</button>
            <button onClick={() => setOption(2)}>최근에 본 프로젝트</button>
            <button onClick={() => setOption(3)}>팔로우 한 크리에이터</button>
            <button onClick={() => setOption(4)}>개발노트 - 탭버튼(임시)</button>
        </div>
    );

}

