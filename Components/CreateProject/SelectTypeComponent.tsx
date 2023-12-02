import Image from "next/image";
import promtionBtn from "@/public/createproject/promotionbtn.png"
import fundingBtn from "@/public/createproject/fundingbtn.png"


export default function SelectProjectTypeComponent()
{


    return (
        <div className = "w-3/5 mx-auto my-8">
            <p className ="text-lg font-semibold my-2">프로젝트 선택하기</p>
            <div className ="flex gap-8 my-6">
                <button>
                    <Image src={promtionBtn} alt= "promtionButton"/>
                </button>
                <button>
                    <Image src={fundingBtn} alt= "fundingButton"/>
                </button>
            </div>
            <div className ="flex justify-between">
                <button>
                    &lt; 뒤로가기
                 </button>
                <button className ="w-44 h-10 bg-white">
                    다음으로 
                </button>
            </div>
    </div>);
}