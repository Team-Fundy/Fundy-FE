import board from "@/public/home/board1.png"
import Image from "next/image"
import { HotProjectItemDataType } from "./HotProjectListbar"

type HotProjectItemType = {
    classname: string,
    projectimg: any
    itemdata: HotProjectItemDataType,
}


export default function HotProjectItem({ classname, projectimg, itemdata }: HotProjectItemType) {
    return (
        <div className={classname}>
            <Image className="relative z-0" src={board} alt="" width="400" height="300" />
            <div className="absolute bottom-0 ">
                <Image src={projectimg} alt="" width="300" height="200" />
                <div className="flex place-items-center">
                    <p>{itemdata.percentage}% 달성</p>
                    <p>{itemdata.money}원</p>
                </div>
                <p className="font-['dalmoori'] text-xl">{itemdata.name}</p>
                <p className="font-['dalmoori'] text-lg">{itemdata.genre}</p>
                <p className="font-['dalmoori'] text-base">{itemdata.nickname}</p>
            </div>
        </div >
    )
}
