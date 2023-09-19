import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import { HotProjectItemDataType } from "./HotProjectListbar"
import board from "@/public/home/board1.png"

type HotProjectItemType = {
    projectimg: any
    itemdata: HotProjectItemDataType,
    rank: number,
    highlight: boolean,
}


export default function HotProjectItem({ projectimg, itemdata, rank, highlight }: HotProjectItemType) {

    const [classname, setClassName] = useState<string>("brightness-100")

    useEffect(() => {
        if (highlight)
            setClassName("brightness-100");
        else
            setClassName("brightness-75");
    }, [highlight]);
    //   return "brightness-100" : "brightness-75";
    return (
        <div className={classname}>
            <Link href="/projectinform" >
                <div className="relative z-0">
                    <Image src={board} alt="" width="500" height="300" />
                    <div className="absolute bottom-10 left-8 z-10">
                        <Image src={projectimg} alt="" width="300" height="200" />
                        <div className="flex gap-5  my-2">
                            <p className="text-2xl font-bold texts-violet-600">{itemdata.percentage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}% 달성</p>
                            <p className="text-2xl font-bold text-violet-600">{itemdata.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                        </div>
                        <p className="font-['dalmoori'] text-xl">{itemdata.name}</p>
                        <p className="font-['dalmoori'] text-lg">{itemdata.genre}</p>
                        <p className="font-['dalmoori'] text-base">{itemdata.nickname}</p>
                    </div>

                    {highlight === true ? <div className="absolute -top-6 left-40 z-50">
                        <p className=" font-['dalmoori'] font-bold text-4xl  drop-shadow-xl"># {rank + 1}</p>
                        <div className="border-t-2 w-16 h-4 border-slate-400"></div>
                    </div> : null}

                </div>
            </Link >
        </div >
    )
}
