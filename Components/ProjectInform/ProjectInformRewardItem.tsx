import Image, { StaticImageData } from "next/image"
import messageicon from "@/public/projectinform/messageicon.png"

type ProjectInformRewardItemType = {
    rewardtitle: string,
    rewardimg: StaticImageData,
    projectdetail: string,
}

export default function ProjectInformRewardItem({ rewardtitle, rewardimg, projectdetail }: ProjectInformRewardItemType) {

    let reward = [null, null, null, null];

    function rewardComponent() {
        return (
            <div className="mx-16">
                {
                    reward.map((i, index) => <p key={index}>* 리워드 제품</p>)
                }
            </div>
        )
    }
    return (
        <div className="border-8 border-gray-200 w-[46rem]">
            <div className="mx-auto">
                <div className="flex gap-4 py-8 px-16">
                    <Image src={rewardimg} alt="" className="w-32 h-32 border-4 border-gray-400" />
                    <div className="my-auto">
                        <p className="font-bold text-xl">{rewardtitle}</p>
                        <div className="flex gap-2">
                            <p className="font-bold text-2xl text-purple-600">65,000원</p>
                            <button className="font-bold text-2xl">+</button>
                        </div>
                    </div>

                </div>
                {rewardComponent()}
            </div>
        </div>
    );
}