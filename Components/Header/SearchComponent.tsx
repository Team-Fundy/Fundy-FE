import searchimage from "@/public/header/searchbtn.png"
import Image from "next/image"

export default function SearchComponent() {
    return (
        <div className="w-full bg-white flex justify-around pb-12 left-24">
            <div>
                <div className="flex gap-8 my-12">
                    <Image src={searchimage} alt="" width="70" height="70" />
                    <div className="border-l-4 border-slate-200 w-2"></div>
                    <input className="placeholder-font-bold text-2xl::placeholder" placeholder=" 어떤 게임을 찾으시나요?" />
                </div>
                <div className="flex flex-col">
                    <p className="font-bold my-4">빠른검색</p>
                    <button className="my-1 text-left">-> 가장 인기 있는 게임</button>
                    <button className="my-1 text-left">-> 신나는 모험이 있는 어드벤처 게임</button>
                    <button className="my-1 text-left">-> 현실을 설계하는 재미 시뮬레이션 게임</button>
                    <button className="my-1 text-left">-> 내가 원하는 캐릭터를 직접해보는 RPG 게임!</button>
                </div>
            </div>
            <div className="bg-white w-4 h-4"></div>
        </div>
    )
}