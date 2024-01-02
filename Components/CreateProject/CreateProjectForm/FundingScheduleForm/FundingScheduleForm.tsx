import { useState } from "react";
import Image from "next/image";
import warningIconfrom from "@/public/createproject/waringIcon.png"


export default function FundingScheduleForm()
{
    const [purposeMoney, setPurposeMoney] = useState<string>("");

    return (
        <div className ="h-fit bg-slate-100 mx-[8rem]">
            <h1 className = "my-3 font-bold text-4xl mt-[9rem]">펀딩 일정</h1>
            <p>프로젝트를 펀딩받기 위한 자세한 정보를 입력해주세요</p>

            <div className ="w-96 my-14">
                <h2 className ="font-semibold text-lg my-2">목표 금액 설정</h2>
                <p className ="my-2 text-gray-600 text-[0.8rem]">프로젝트를 성공시키기 위해 필요한 금액을 설정해주세요.</p>
                <div className ="relative w-fit">
                    <input 
                        className={`rounded-sm w-[40rem] h-12 border-[0.1rem] text-start`}
                        placeholder="50만원 이상의 금액을 입력하시오."
                        onChange={(event)=>setPurposeMoney(event.target.value)}/>
                    <p className ="absolute bottom-3 right-3 font-semibold text-[1.1rem]">원</p>
                </div>

                <div className ="border-2 border-slate-200 w-[40rem] mt-4 h-fit text-gray-500 px-6 py-4 bg-white">
                    <div className ="flex gap-2">
                        <Image src={warningIconfrom} alt="warning" className ="w-4 h-4 my-auto"/>
                        <p className ="text-lg font-semibold">목표 금액을 입력할 때, 알아두셔야 할 점</p>
                    </div>
                    <ul className ="list-disc ml-10">
                        <li> 후원금은 게임을 제작할때 필요한 최종 금액의 정도입니다.</li>
                        <li> 프로젝트의 성공 여부를 결정짓는 중요한 요소이니 신중하게 고민해 주세요.</li>
                        <li> 펀디는 후원자들의 후원금을 바로 받을 수 없습니다.<br/>펀딩일이 끝나는 날에 후원자들의 전체 후원금을 받을 수 있다는 것을 명심해주세요.</li>
                    </ul>
                </div>
                <p></p>
            </div>

            <br/>

           
        </div>
    )
}