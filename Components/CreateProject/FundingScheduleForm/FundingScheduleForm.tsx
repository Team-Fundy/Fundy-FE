import { useState } from "react";
import Image from "next/image";
import warningIconfrom from "@/public/createproject/waringIcon.png"
import timeIcon from "@/public/createproject/icon/timeIcon.png"
import uparrowIcon from "@/public/createproject/icon/uparrowIcon.png"
import calandericon from "@/public/createproject/icon/calandericon.png"
import talkBallon from "@/public/createproject/talkBallon.png"

export default function FundingScheduleForm()
{
    const [purposeMoney, setPurposeMoney] = useState<string>("");
    const [creatorIntroduce, setCreatorIntroduce] = useState<string>("");
    const [agentName, setAgentName] = useState<string>("");
    const [isIdentityVerification, setIsIdentityVerification] = useState<boolean>(false);
    const [account, setAccount] = useState<string>("");
    const [taxbill, setTaxbill] = useState<string>("");


    function getInputBorderColor(str : string, lengthLimit : number)
    {
        if (str.length > 0 && str.length <= lengthLimit)
        {
            return "border-gray-500"
        } else {
            return "border-red-600"
        } 
    }

    function getInputStringLength(str : string)
    {
        return str.length.toString();
    }

    function getInputLimitStringColor(str : string, lengthLimit : number)
    {
        if (str.length > lengthLimit)
        {
            return "text-red-600";;
        } else {
        return "text-gray-500";
        }
    }

    return (
        <div className ="h-fit bg-slate-100 mx-[8rem]">
            <h1 className = "my-3 font-bold text-4xl mt-[9rem]">펀딩 일정</h1>
            <p>프로젝트를 펀딩받기 위한 자세한 정보를 입력해주세요</p>

            <div className ="w-96 my-14">
                <h2 className ="font-semibold text-lg my-2">목표 금액 설정</h2>
                <p className ="my-2 text-gray-600 text-[0.9rem]">프로젝트를 성공시키기 위해 필요한 금액을 설정해주세요.</p>
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
            <hr/>
            <br/>

            <h2 className ="font-semibold text-lg my-2">펀딩 시작일</h2>
            <p className ="my-2 text-gray-500 text-[0.9rem]">펀딩을 시작하는 날짜 및 시간을 선택해 주세요.</p>
            <div className ="flex gap-4 ">
                <div className ="w-[26rem] h-12 border-2 border-slate-300 bg-white">
                    <div className ="flex justify-between h-fit my-[0.2rem]">
                        <div className ="flex">
                            <Image src={calandericon} alt="clanander" className ="w-6 h-6 my-auto mx-3"/>
                            <div>
                                <p className ="text-gray-300 text-[0.7rem]">Select a day</p>
                                <p className ="text-gray-500 text-[0.9rem]">날짜 선택</p>
                            </div>
                        </div>
                        <button><Image src={uparrowIcon} alt="upbtn" className ="w-4 h-4 my-auto mx-3"/></button>
                    </div>
                </div>
                <div className ="w-[14rem] h-12 border-2 border-slate-300 bg-white">
                    <div className ="flex justify-between h-fit my-[0.2rem]">
                        <div className ="flex">
                            <Image src={timeIcon} alt="clanander" className ="w-6 h-6 my-auto mx-3"/>
                            <div>
                                <p className ="text-gray-300 text-[0.7rem]">Select a time</p>
                                <p className ="text-gray-500 text-[0.9rem]">시간 선택</p>
                            </div>
                        </div>
                        <button><Image src={uparrowIcon} alt="upbtn" className ="w-4 h-4 my-auto mx-3"/></button>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className ="relative">
                <Image src={talkBallon} alt="talkBallon"/>
                <div className ="absolute left-8 top-4">
                    <p className ="font-bold text-[1.1rem]">펀딩기간</p>
                    <p className ="text-[0.85rem] text-gray-400">총 98일</p>
                </div>
            </div>
            <br/>
            <br/>
            <h2 className ="font-semibold text-lg my-2">펀딩 종료일</h2>
            <div className ="w-[26rem] h-12 border-2 border-slate-300 bg-white">
                <div className ="flex justify-between h-fit my-[0.2rem]">
                     <div className ="flex">
                        <Image src={calandericon} alt="clanander" className ="w-6 h-6 my-auto mx-3"/>
                        <div>
                            <p className ="text-gray-300 text-[0.7rem]">Select a day</p>
                            <p className ="text-gray-500 text-[0.9rem]">날짜 선택</p>
                            </div>
                        </div>
                        <button><Image src={uparrowIcon} alt="upbtn" className ="w-4 h-4 my-auto mx-3"/></button>
                    </div>
                </div>
            <br/>
            <br/>
            <div className ="w-96 my-14">
                <h2 className ="font-semibold text-lg my-2">후원자 결제 종료</h2>
                <p className ="my-2 text-gray-600 text-[0.9rem]">프로젝트를 성공시키기 위해 필요한 금액을 설정해주세요.</p>
                <input 
                    className={`rounded-sm w-[20rem] h-12 border-2  border-slate-500 text-start`}
                    placeholder="나중에 이 부분에 들어 갈 텍스트 정해야함"/>
                <p className ="text-[0.8rem] my-2 text-gray-500">종료일 다음 날 부터 7일</p>
            </div>
            <br/>
            <br/>
            <div className ="w-96 my-14">
                <h2 className ="font-semibold text-lg my-2">정산일</h2>
                <p className ="my-2 text-gray-600 text-[0.9rem]">프로젝트를 성공시키기 위해 필요한 금액을 설정해주세요.</p>
                <input 
                    className={`rounded-sm w-[20rem] h-12 border-2  border-slate-500 text-start`}
                    placeholder="나중에 이 부분에 들어 갈 텍스트 정해야함"/>
                <p className ="text-[0.8rem] my-2 text-gray-500">후원자 결제 종료일 다음 날 부터 7 영업일</p>
            </div>
        </div>
    )
}