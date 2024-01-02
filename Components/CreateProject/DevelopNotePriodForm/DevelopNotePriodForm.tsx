import Image from "next/image"
import { useState } from "react";

import warningIcon from "@/public/createproject/waringIcon.png"
import talkBallonImage from "@/public/createproject/talkballon2.png"
import updirectionImage from "@/public/createproject/icon/uparrowIcon.png"

type ButtonListType = {
    value : string[],
    unit : string
}

export default function DevelopNotePriodForm()
{
    const [selectedWeek,setSelectedWekk] = useState('2');  
    const week = ['1','2','3','4','5'];
    const days = ['월','화','수','목','금','토','일'];

    function ButtonList({value, unit} : ButtonListType) {
        return (
        <div className ="w-[36rem] h-12 border-2 border-slate-300 bg-white">
            <div className ="flex justify-between h-fit my-[0.2rem]">
                <div className ="flex">
                {
                    week.map((item,index)=> (
                        <button className ="flex"> 
                            <p  
                                key ={index}
                                className ={`font-semibold ${selectedWeek === item ? 'text-[#685BFE]' : 'text-gray-300'}`}
                                onClick={()=>setSelectedWekk(item)}>
                                {item}
                            </p>
                            <p className ={`${selectedWeek === item ? 'text-black' : 'text-gray-300'}`}>{unit}</p>
                        </button>
                    ))
                }
                </div>
            </div>
        </div>
        )
    }

    return (
    <div className ="mt-[8rem] ml-[8rem]">
        <h1 className = "my-3 font-bold text-4xl">개발노트 설정</h1>
        <p className ="text-[0.8rem]">개발노트의 업로드 주기를 설정해주세요. <br/> 개발노트를 꾸준히 올리면 평가가 점점 좋아집니다!</p>
 
            <h2 className ="font-semibold text-lg mt-12">주기 설정</h2>
            <p className ="my-2 text-gray-500 text-[0.9rem]">몇주 주기로 무슨 요일에 개발 노트를 업로드를 할지 설정하세요!</p>
            <div className ="flex gap-4 ">
                <ButtonList value ={week} unit ="일"/>
                <div className ="w-[20rem] h-fit border-2 border-slate-300 bg-white">
                    <div className ="flex justify-between h-fit my-[0.2rem]">
                        <div className ="flex h-fit px-4 py-3 gap-2">
                            <Image src ={warningIcon} alt="warning" className="w-4 h-4 my-1"/>
                            <p className ="text-[0.8rem]">개발일지의 업로드 일자를 놓칠때마다, 펀딩금액에 영향이 갈 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <ButtonList value ={days} unit = "요일"/>
            <br/>
            <br/>
            <div className ="relative w-fit">
                <Image src={talkBallonImage} alt="talkBallon" className ="w-[15rem] h-[9rem]"/>
                <div className ="absolute w-fit left-10 top-4">
                    <p className ="font-semibold text-[1rem]">개발노트 업로드 주기</p>
                    <p className ="text-[0.8rem] text-gray-400 my-4">2주마다 월요일에 업로드 예정</p>
                    <p className="text-purple-900 text-sm mx-auto my-7">다음 업로드 예정일 : 11월 6일</p>
                </div>
                <div className="image-container">
                 <Image className="absolute right-4 top-6" src={updirectionImage} alt="updir" />
            </div>
        </div>
    </div>
    )
}