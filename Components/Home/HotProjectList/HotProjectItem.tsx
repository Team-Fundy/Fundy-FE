import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import { HotProjectItemDataType } from "./HotProjectList"
import board from "@/public/home/board1.png"

type HotProjectItemType = {
    projectimg: any
    itemdata: HotProjectItemDataType,
    rank: number,
    highlight: boolean,
}


export default function HotProjectItem({ projectimg, itemdata, rank, highlight }: HotProjectItemType) {

    const [classname, setClassName] = useState<string>("brightness-100 w-fit h-fit flex-none")

    useEffect(() => {


    }, [highlight]);
    return (
        <div className={classname}>
            <Link href="/projectinform" >
                <div className="w-[20rem] h-[22rem] relative z-0">
                    <Image src={board} alt="" className="w-full h-full" />
                    <div className="absolute top-8 left-6">
                        <Image src={projectimg} alt="" className="w-[17rem] h-[10rem]" />
                        <div className="flex gap-5 my-2">
                            <p className="text-2xl font-bold text-orange-600">{itemdata.percentage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}% 달성</p>
                            <p className="text-md font-semibold text-black">{itemdata.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                        </div>
                        <p className="font-bold text-xl">{itemdata.name}</p>
                        <p className="px-2 text-xs font-bold bg-slate-200 w-fit text-gray-400 my-2 mx-2">{itemdata.genre}</p>
                        <p className="text-xs my-2 text-gray-400">주식회사 준오즈</p>
                    </div>
                    {highlight === true ? <div className="relative bottom-[62rem] h-2 left-40 z-50">
                        <p className=" font-['dalmoori'] text-[3.5rem] drop-shadow-xl"># {rank + 1}</p>
                        <div className="border-t-2 w-16 h-4 border-slate-400"></div>
                    </div> : null}
                </div>
            </Link >
        </div >
    )
}
