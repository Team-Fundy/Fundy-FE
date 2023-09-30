import ProfileBoard from "@/public/mypage/profileboard.png"
import PupleButton from "@/public/mypage/purplebutton.png"
import Image from "next/image"


export default function CreatorMyPageProfile() {
    let followingcreator = 2888;
    let likedproject = 4;
    const introducetext = "카드 오브 던전 클래식은 당신만의 카드르 모아 다양한 던전에 대항하여 주인공에 얽혀있는 수수께끼를 푸는 전략 캐주얼 판타지 게임 - 팀소개";

    function onClickEditBtn() {

    }
    return (
        <div className="relative z-2 -top-72">
            <Image src={ProfileBoard} alt="" className="relative h-[40rem] w-84" />
            <div className="absolute z-3 top-12">
                <div className="w-48 h-48 bg-gray-400 rounded-full mx-auto"></div>
                <p className="text-3xl font-bold my-8 text-center">크리에이터 팀 이름 </p>
                <p className="px-8">{introducetext}</p>
                <div className="flex gap-4 my-12 justify-center">
                    <div className="w-20 text-center">
                        <p className="text-indigo-600 text-xl font-bold my-2">{followingcreator}명</p>
                        <p> 팔로워 </p>
                    </div>
                    <div className="w-1 h-8 border-2 border-gray-200"></div>
                    <div className="w-20 text-center">
                        <p className="text-indigo-600 text-xl font-bold my-2">{likedproject}개</p>
                        <p> 프로젝트 수 </p>
                    </div>
                </div>
            </div>
            <div className="grid    ">
                <button className="my-2 relative"> <Image src={PupleButton} alt="" onClick={onClickEditBtn} /> <p className="absolute bottom-4 left-24 text-2xl text-white font-bold"> 프로필 수정하기</p></button>
                <button className="my-2 relative"> <Image src={PupleButton} alt="" onClick={onClickEditBtn} /> <p className="absolute bottom-4 left-24 text-2xl text-white font-bold"> 문의 글 확인하기</p></button>
            </div>
        </div >
    )
} 