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
        <div className ="w-3/5  mx-auto ">
        <h1 className ="text-xl font-semibold">유의사항 확인하기</h1>

        <div className ="w-full h-80 my-auto bg-white rounded-xl">
            <div className ="h-fit">
                <p>프로젝트 진행을 위해 아래 내용을 확인해주세요.</p>
                <div className ="flex">
                    <div>
                        <p className = "font-bold text-xl">서비스 내용 동의 </p>
                        <div className ="flex gap-4">
                            <input type="checkbox"/>
                            <p>대표 창작자는 만 19세 이상의 성인이어야 합니다.</p>
                        </div>
                        <div className ="flex gap-4">
                            <input type="checkbox"/>
                            <p>필요 시 연락 드릴 수 있도록 본인 명의의 휴대폰 번호와 이메일 주소가 필요합니다.</p>
                        </div>
                        <div className ="flex gap-4">              
                            <input type="checkbox"/>
                            <p>펀딩 성공 후의 정산을 위해 신분증 또는 사업자 등록증, 국내 은행 계좌를 준비해주세요.</p>
                        </div>
                    </div>
                    <Image src={characters_img} alt ="characterImgs"/>
                </div>
            </div>
        </div>
        <div className ="flex justify-between">
             <Link href ="/" className ="flex gap-1">
                 <Image src={leftdirBtn} alt ="leftButton" className ="w-3 h-3 my-auto"/>
                 <p className ="my-auto text-gray-500 text-sm">뒤로가기</p>
              </Link>
             <button className ="w-44 h-10 bg-white" onClick={onClickNextBtn}>
                 다음으로 
             </button>
         </div>
         </div>
    )
}