import Image, { StaticImageData } from "next/image"
import messageicon from "@/public/projectinform/messageicon.png"

type ProjectInformTeamCardType = {
    projectname: string,
    projectimg: StaticImageData,
    projectdetail: string,
}

export default function ProjectInformTeamCard({ projectname, projectimg, projectdetail }: ProjectInformTeamCardType) {
    return (
        <div className="border-8 border-gray-200 w-fit">
            <div className="flex gap-4 py-8 mx-auto px-16">
                <Image src={projectimg} alt="" className="w-32 h-32 border-4 border-gray-400" />
                <div>
                    <p className="font-bold text-2xl py-4">{projectname}</p>
                    <p className="text-purple-500">4명의 핀더가 관심을 가지고 있습니다.</p>
                </div>
                <button className="font-['dalmoori'] text-white bg-purple-600 px-12 h-12 my-4 py-auto ml-16">팔로우하기 +</button>
            </div>
            <p className="mx-12 px-12 w-96">{projectdetail}</p>

            <button className="font-['dalmoori'] flex gap-4 px-12 h-12 w-96 border-2 border-gray-200 mx-auto">
                <Image src={messageicon} alt="" className="py-4" />
                <p className="mx-auto py-4">문의하기</p>
            </button>

        </div>
    );
}