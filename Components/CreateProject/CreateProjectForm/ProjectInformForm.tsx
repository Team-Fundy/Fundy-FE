import { useState } from "react"
import Image from "next/image";
import warningIconfrom from "@/public/createproject/waringIcon.png"
import imageUploadButton from "@/public/createproject/imageUploadBtn.png"
import videoUploadButton from "@/public/createproject/videoUploadBtn.png"

export default function ProjectInformForm()
{
    const [creatorName, setCreatorName] = useState<string>("");
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

    function onClickSetCreatorProfileImageButton()
    {

    }

    return (
        <div className ="h-fit bg-slate-100">
            <h1 className = "my-3 font-bold text-5xl">프로젝트 정보 작성</h1>
            <p>프로젝트 작성에 필요한 정보들을 기입해 주세요.</p>

            <div className ="w-96 my-14">
                <div className ="flex h-fit gap-1">
                    <h2 className ="font-semibold text-lg my-2">카테고리</h2>
                </div>
                <p className ="my-2 text-gray-600">게임 프로젝트의 게임 카테고리를 설정해주세요. <br/> 지금 설정했어도 이후에 바꿀 수 있어요</p>
                <select 
                    className={`rounded-sm w-96 h-12 border-[0.1rem] ${getInputBorderColor(creatorName,40)} text-start`}
                    placeholder="카테고리 선택"
                    onChange={(event)=>setCreatorName(event.target.value)}>
                        <option>카테고리 선택</option>
                </select>
            </div>

            <hr/>
            <br/>

            <div className ="w-96 my-14">
                <div className ="flex h-fit gap-1">
                    <h2 className ="font-semibold text-lg my-2">프로젝트 게임의 제목을 작성해주세요.</h2>
                    <p className ="my-auto text-xl text-red-500">*</p>
                </div>
                <p className ="my-2 text-gray-600">프로젝트 게임을 대표할 수 있는 멋있는 이름을 지어주세요.</p>
                <input 
                    className={`rounded-sm w-96 h-12 border-[0.1rem] ${getInputBorderColor(creatorName,40)} text-start`}
                    placeholder="   40자 이내의 제목을 작성해주세요."
                    onChange={(event)=>setCreatorName(event.target.value)}/>
                <div className ="flex justify-between">
                    { creatorName.length === 0
                       ? <p className="my-2 text-sm text-gray-600 text-red-600 font-medium">필수 항목 입니다.</p>
                       : <p></p> }
                    <p className={`my-2 text-sm ${getInputLimitStringColor(creatorName,40)} `}>{getInputStringLength(creatorName)}/40자</p>
                </div>
            </div>

            <hr/>
            <br/>

            <div className ="w-[34rem] my-14">
                <h2 className ="font-semibold text-lg my-3">프로젝트 게임의 설명을 작성해주세요.</h2>
                <p className ="my-2 text-gray-600">프로젝트 게임의 내용을 펀더들이 이해하고 펀딩할 수 있도록 간략하고 명확하게 설명해주세요.</p>
                <input 
                    className={`rounded-sm w-[34rem] h-[7.5rem] border-[0.1rem] border-gray-500 text-start`}
                    placeholder=" 150자 이내의 설명을 작성해주세요."
                    onChange={(event)=>setCreatorIntroduce(event.target.value)}/>
                <div className ="flex justify-between">
                    <p></p>
                    <p className={`my-2 text-sm ${getInputLimitStringColor(creatorIntroduce,150)} `}>{getInputStringLength(creatorIntroduce)}/150자</p>
                </div>
            </div>


            <hr/>
            <br/>
            
            <h2 className ="font-semibold text-lg my-2">대표 이미지</h2>
            <p className ="my-2 text-gray-600">펀더들이 한눈 프로젝트의 느낌을 알 수 있도록 메인 이미지를 업로드 해주세요.</p>
            <div className ="flex gap-2">
                <button
                    className ="bg-white px-20 py-16" 
                    onClick={onClickSetCreatorProfileImageButton}>
                    <Image src={imageUploadButton} alt="nll"/>
                </button>
                <div className ="w-fit h-fit px-6 py-6 border-2 border-gray-200 bg-white ">
                    <div className ="flex">
                        <Image
                            src={warningIconfrom} 
                            alt ="warningIcon" 
                            className = "w-5 h-5 my-1 mx-2"/>
                        <div>
                            <div className ="flex gap-1">
                                <label className ="text-gray-300">파일형식 :</label>
                                <p className ="text-gray-500"> jpg 또는 png</p>
                            </div>
                            <div className ="flex gap-1">
                                <label  className ="text-gray-300">사이즈 :</label>
                                <p className ="text-gray-500"> 최소 (가로 1240px, 세로 930px 이상) <br/> 최대 (가로 1920px, 세로 1080px 이하)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <hr/>
            <br/>
                        
            <h2 className ="font-semibold text-lg my-2">작품 설명 이미지&영상</h2>
            <p className ="my-2 text-gray-600">펀더들이 한눈 프로젝트의 느낌을 알 수 있도록 메인 이미지를 업로드 해주세요.</p>
            <div className ="flex gap-2">
                <button
                    className ="bg-white px-24 py-16  hover:scale-105" 
                    onClick={onClickSetCreatorProfileImageButton}>
                    <Image src={imageUploadButton} alt="nll"/>
                </button>

                <button
                    className ="bg-white px-12 py-16  hover:scale-105" 
                    onClick={onClickSetCreatorProfileImageButton}>
                    <Image src={videoUploadButton} alt="nll"/>
                </button>
            </div>
        </div>
    )
}