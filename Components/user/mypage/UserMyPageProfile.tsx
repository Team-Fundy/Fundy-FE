import ProfileBoard from "@/public/mypage/profileboard.png"
import PupleButton from "@/public/mypage/purplebutton.png"
import Image from "next/image"


export default function UserMyPageProfile() {
    let followingcreator = 2;
    let likedproject = 4;

    function onClickEditBtn() {

    }
    return (
        <div>
            <div className="relative">
                <Image src={ProfileBoard} alt="" />
                <div className="absolute bottom-16 left-16 ">
                    <div className="w-48 h-48 bg-gray-400 rounded-full"></div>
                    <p className="text-3xl font-bold my-12 text-center">프로필 이름 </p>
                    <div className="flex gap-4 my-12">
                        <div className="w-20 text-center">
                            <p className="text-indigo-600 text-xl font-bold my-2">{followingcreator}팀</p>
                            <p>  팔로우 한 &nbsp; 크리에이터 </p>
                        </div>
                        <div className="w-1 h-8 border-2 border-gray-200"></div>
                        <div className="w-20 text-center">
                            <p className="text-indigo-600 text-xl font-bold my-2">{likedproject}개</p>
                            <p>  관심이 있는 프로젝트 </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="my-2 relative"> <Image src={PupleButton} alt="" onClick={onClickEditBtn} /> <p className="absolute bottom-4 left-24 text-2xl text-white font-bold"> 프로필 수정하기</p></button>
        </div>
    )
} 