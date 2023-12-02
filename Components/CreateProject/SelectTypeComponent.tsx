import Image from "next/image";
import promtionBtn from "@/public/createproject/promotionbtn.png"
import fundingBtn from "@/public/createproject/fundingbtn.png"
import leftdirBtn from "@/public/createproject/leftdirbtn.png"
import Link from "next/link";

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
                <Link href ="/" className ="flex gap-1">
                    <Image src={leftdirBtn} alt ="leftButton" className ="w-3 h-3 my-auto"/>
                    <p className ="my-auto text-gray-500 text-sm">뒤로가기</p>
                 </Link>
                <button className ="w-44 h-10 bg-white">
                    다음으로 
                </button>
            </div>
    </div>);
}