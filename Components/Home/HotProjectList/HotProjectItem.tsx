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

    const [classname, setClassName] = useState<string>("brightness-100 w-fit h-fit")

    useEffect(() => {
        if (highlight)
            setClassName("brightness-100 w-fit h-fit");
        else
            setClassName("brightness-75 w-fit h-fit");

    }, [highlight]);
    return (
        <div className={classname}>
            <Link href="/projectinform" >
                <div className="relative z-0">
                    <Image src={board} alt="" className="w-[28.5rem] h-[30.5rem]" />
                    <div className="relative bottom-[28rem] z-10 py-8">
                        <Image src={projectimg} alt="" className="w-[24rem] h-[15rem]" />
                        <div className="flex gap-5 my-2">
                            <p className="text-2xl font-bold text-orange-600">{itemdata.percentage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}% 달성</p>
                            <p className="text-md font-semibold text-black">{itemdata.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                        </div>
                        <p className="font-bold text-xl">{itemdata.name}</p>
                        <p className="px-2 text-xs font-bold bg-slate-200 w-fit text-gray-400 my-2 mx-2">{itemdata.genre}</p>
                        <p className="text-xs my-2 text-gray-400">주식회사 준오즈</p>
                    </div>

                    {highlight === true ? <div className="relative bottom-[62rem] left-40 z-50">
                        <p className=" font-['dalmoori'] text-[3.5rem] drop-shadow-xl"># {rank + 1}</p>
                        <div className="border-t-2 w-16 h-4 border-slate-400"></div>
                    </div> : null}

                </div>
            </Link >
        </div >
    )
}
