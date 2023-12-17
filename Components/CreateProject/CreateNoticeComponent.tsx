import Image from "next/image"
import Link from "next/link"

import characters_img from "@/public/createproject/characters.png"
import leftdirBtn from "@/public/createproject/leftdirbtn.png"

export default function CreateNoticeComponent()
{

    function onClickNextBtn()
    {
       // if(selectedProjectType === "null")
        {
            alert("프로젝트 종류를 선택해주세요");
            return ;
        }
    }

    return (
        <div className ="w-3/5  h-screen mx-auto grid grid-rows-3 align-middle">
            <p className ="h-12 text-xl my-auto font-semibold">유의사항 확인하기</p>
            <div className ="w-full h-80 my-auto px-16 bg-white rounded-xl grid grid-rows-1 align-center">
                <div className ="h-fit my-auto">
                    <p className ="my-8 font-medium text-gray-400">프로젝트 진행을 위해 아래 내용을 확인해주세요.</p>
                    <div className ="flex my-6 justify-between">
                        <div>
                            <p className = "font-bold text-xl my-4">서비스 내용 동의 </p>
                            <div className ="flex gap-2 my-2 text-sm">
                                <input type="checkbox"/>
                                <p>대표 창작자는 <strong>만 19세 이상의 성인</strong>이어야 합니다.</p>
                            </div>
                            <div className ="flex gap-2 my-2 text-sm">
                                <input type="checkbox"/>
                                <p>필요 시 연락 드릴 수 있도록 <strong>본인 명의의 휴대폰 번호</strong>와 <strong>이메일 주소</strong>가 필요합니다.</p>
                            </div>
                            <div className ="flex gap-2 my-2 text-sm">              
                                <input type="checkbox"/>
                                <p>펀딩 성공 후의 정산을 위해 <strong>신분증 또는 사업자 등록증, 국내 은행 계좌</strong>를 준비해주세요.</p>
                            </div>
                        </div>
                        <Image src={characters_img} alt ="characterImgs" className ="w-48 h-36"/>
                    </div>
                </div>
            </div>
        <div className ="flex justify-between">
             <Link href ="/" className ="flex gap-1">
                 <Image src={leftdirBtn} alt ="leftButton" className ="w-3 h-3 my-auto"/>
                 <p className ="my-auto text-gray-500 text-sm">뒤로가기</p>
              </Link>
             <button className ="my-auto w-44 h-10 bg-white" onClick={onClickNextBtn}>
                 다음으로 
             </button>
         </div>
    </div>
    )
}