import Image from "next/image"
import sidebarBackgroundImage from "@/public/createproject/nav/createprojectSidebarBackground.png"
import navLogo from "@/public/createproject/nav/navlogo.png"

export default function CreateProjectSidebar()
{
    const name = "땡땡땡"
    const position = 1;


    

    return (
        <div className ="w-fit h-fit bg-black">
            <div className ="grid w-full h-60">
                <div className = "w-fit h-fit mx-auto my-auto align-middle">
                    <Image 
                        className ="mx-auto w-20 h-20"
                         src={navLogo} 
                         alt ="navLogo"/>
                    <div className ="w-fit flex text-white mx-auto">
                        <p className ="text-3xl text-bold">{name}</p>
                        <p className ="text-end align-bottom">님의</p>
                    </div>
                    <p className ="text-gray-400 text-xl">펀딩 프로젝트 월드맵</p>
                </div>
            </div>
            <Image src ={sidebarBackgroundImage} alt="background"/>
        </div>
    )
}