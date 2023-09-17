import board from "@/public/home/board1.png"
import Image from "next/image"
import Link from "next/link"
import { HotProjectItemDataType } from "./HotProjectListbar"

type HotProjectItemType = {
    classname: string,
    projectimg: any
    itemdata: HotProjectItemDataType,
}


export default function HotProjectItem({ classname, projectimg, itemdata }: HotProjectItemType) {
    return (
        <div className={classname}>
            <Link href="/projectinform" >
                <div className="relative z-0">
                    <Image src={board} alt="" width="500" height="300" />
                    <div className="absolute bottom-10 left-8">
                        <Image src={projectimg} alt="" width="300" height="200" />
                        <div className="flex gap-5  my-2">
                            <p className="text-2xl font-bold text-violet-600">{itemdata.percentage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}% 달성</p>
                            <p className="text-2xl font-bold text-violet-600">{itemdata.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                        </div>
                        <p className="font-['dalmoori'] text-xl">{itemdata.name}</p>
                        <p className="font-['dalmoori'] text-lg">{itemdata.genre}</p>
                        <p className="font-['dalmoori'] text-base">{itemdata.nickname}</p>
                    </div>
                </div>
            </Link >
        </div >
    )
}
