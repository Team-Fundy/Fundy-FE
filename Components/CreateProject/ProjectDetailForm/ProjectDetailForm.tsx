import { useState } from "react"
import TextEditor from "@/Components/TextEditor/TextEditor";
import Image from "next/image";

export default function ProjectDetailForm()
{
    const [projectIntroduce, setProjectIntroduce] = useState<string>("");
    const [projectBudget, setProjectBudget] = useState<string>("");
    const [projectCalander, setProjectCalander] = useState<string>("");
    const [projectTeamIntroduce, setProjectTeamIntroduce] = useState<string>("");


    return (
        <div className ="h-fit bg-slate-100 ml-12 my-10">
            <h1 className = "my-3 font-bold text-4xl">프로젝트 계획 작성</h1>
            <p className ="text-[0.75rem] text-gray-700 mb-8">프로젝트 계획 작성에 필요한 정보들을 기입해 주세요. </p>

            <div className ="border-[0.1rem] h-fit border-slate-400 bg-white px-8 py-8">
                <p className ="my-2 mx-1 text-[0.9rem] font-semibold">프로젝트 소개</p>
                <TextEditor setContents={setProjectIntroduce}/>
                <hr className ="my-8"/>
                <p className ="my-2 mx-1 text-[0.9rem] font-semibold">프로젝트 예산</p>
                <TextEditor setContents={setProjectBudget}/>
                <hr className ="my-8"/>
                <p className ="my-2 mx-1 text-[0.9rem] font-semibold">프로젝트 일정</p>
                <TextEditor setContents={setProjectCalander}/>
                <hr className ="my-8"/>
                <p className ="my-2 mx-1 text-[0.9rem] font-semibold">프로젝트 팀 소개</p>
                <TextEditor setContents={setProjectTeamIntroduce}/>
            </div>
        </div>
    )
}