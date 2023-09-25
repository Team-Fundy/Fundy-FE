import Image, { StaticImageData } from "next/image"
import messageicon from "@/public/projectinform/messageicon.png"

type ProjectInformTeamCardType = {
    teamname: string,
    projectimg: StaticImageData,
    projectdetail: string,
}

export default function ProjectInformTeamCard({ teamname, projectimg, projectdetail }: ProjectInformTeamCardType) {
    return (
        <div className="border-8 border-gray-200 w-[40rem] h-fit py-4 mb-4">
            <div className="flex gap-8 py-8 mx-auto px-16">
                <Image src={projectimg} alt="" className="w-32 h-32 border-4 border-gray-400" />
                <div>
                    <div className="flex">
                        <p className="font-bold text-xl py-4">{teamname}</p>
                        <button className="font-['dalmoori'] text-white bg-purple-600 px-8 h-12 my-4 py-auto ml-12 text-sm">팔로우하기 +</button>
                    </div>
                    <p className="text-purple-500">4명의 핀더가 관심을 가지고 있습니다.</p>
                </div>

            </div>
            <p className="mx-12 px-4 py-4 w-[30rem]">{projectdetail}</p>

            <button className="font-['dalmoori'] flex gap-4 px-12 h-12 w-96 border-2 border-gray-200 mx-auto">
                <Image src={messageicon} alt="" className="py-4" />
                <p className="mx-auto py-[0.75rem]">문의하기</p>
            </button>

        </div>
    );
}