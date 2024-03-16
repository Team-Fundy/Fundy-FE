import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, use } from "react"

import { HotProjectItemDataType } from "./HotProjectList"
import board from "@/public/home/board1.png"
import likeimage from "@/public/home/icon/likeIcon.png"
import unlikeimage from "@/public/home/icon/unlikeIcon.png"
import promtionIconImage from "@/public/home/icon/promotionIcon.png"
import fundingIconImage from "@/public/home/icon/fundingIcon.png"
import deadlineIconImage from "@/public/home/icon/deadlineIcon.png"


type HotProjectItemType = {
    projectimg: any
    itemdata: HotProjectItemDataType,
    rank: number,
    highlight: boolean,
}


export default function HotProjectItem({ projectimg, itemdata, rank, highlight }: HotProjectItemType) {

    const [classname, setClassName] = useState<string>("w-fit h-fit flex-none")
    const [isLiked, setIsLiked] = useState<boolean>(true);
    const [isPromtion, setIsPromtion] = useState<boolean>(true);
    const [isDeadline, setIsDeadline] = useState<boolean>(true);

    useEffect(()=>{
        highlight? setClassName("w-fit h-fit flex-none scale-105" ) : setClassName("w-fit h-fit flex-none scale-100" )
    },[highlight])

    return (
        <div className={classname}>
            <Link href="/fundingdetail" >
            {/* <Link href="/projectinform" > */}
                <div className="w-[20rem] h-[23rem] relative z-0">
                    <Image src={board} alt="" className="w-full h-full" />
                    <div className="absolute top-8 left-8">
                        <div className ="relative">
                            <Image src={projectimg} alt="" className="w-[16rem] h-[9rem]" />
                            {isDeadline ? <Image src ={deadlineIconImage} alt ="" className ="absolute top-2 left-0 w-16 h-5"/> : null }
                            <Image src ={isPromtion ? promtionIconImage : fundingIconImage} alt ="" className ="absolute -bottom-4 right-2 w-7 h-7"/>
                        </div>
                        
                        <div className="flex gap-2 mt-6">
                            <p className="text-xl font-bold text-orange-600">{itemdata.percentage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}% 달성</p>
                            <p className="text-md text-gray-600">|</p>
                            <p className="text-md text-black">{itemdata.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                        </div>
                        <p className="font-bold text-xl mt-4">{itemdata.name}</p>
                        <p className="px-2 text-xs font-bold bg-slate-200 w-fit text-gray-400 my-2">{itemdata.genre}</p>
                        <div className ="flex justify-between">
                        <p className="text-xs my-2 text-gray-400">주식회사 준오즈</p>
                        <button onClick ={()=>setIsLiked((isliked)=>!isliked)}>
                            <Image id ="liked-btn" className ="w-8 h-8" src={isLiked? likeimage : unlikeimage } alt ="" />
                        </button>
                        </div>
                    </div>
                    {highlight === true ? <div className="absolute left-36 -top-10 w-16 text-center h-2 z-50">
                        <p className=" font-['dalmoori'] text-[2rem] font-semibold drop-shadow-xl"># {rank + 1}</p>
                        <div className="border-t-2 ml-2 w-12 h-4 border-slate-400"></div>
                    </div> : null}
                </div>
            </Link >
        </div >
    )
}
