
import purplebar from "@/public/home/purplebar.png"
import tempimage from "@/public/home/temp/image 16.png"
import Image from "next/image";

export default function GenreListItem() {
    const option = ["RPG", "액션"];
    const title = "던전의 머시깽이의 머시깽이";
    const content = "카드 오브 던전 클래식은 당신만의 카드를 모아 던전 머시깽이를 머시깽이 하는 머시깽이 입니다.";
    const percent = "1280"
    const saveMoney = "1,400,000";
    return (
        <div>
            <button className="overflow-hidden my-4">
                <Image className="" src={tempimage} alt="" width="265" height="172" />
                <div className="flex gap-2 my-2">
                    {option.map((item: string) => <p className="bg-slate-200 text-slate-500 px-4 rounded">{item}</p>)}
                </div>
                <p className="my-2 text-xl font-bold text-left">{title}</p>
                <p className="w-[17rem] text-sm text-left slate-150">{content}</p>
                <div className="flex mt-2">
                    <p className="text-purpleblue font-bold text-lg">{percent}% 달성</p>
                    <div className="ml-2 w-2 h-[5px] border-l-2 border-slate-400 my-1"></div>
                    <p className="text-slate-400 text-lg">{saveMoney}원</p>
                </div>
                <div className="h-2 w-64 bg-slate-300 my-2">
                    <div className="h-2 bg-purpleblue" style={{ width: "60%" }}></div>
                </div>
            </button>
        </div>
    );
}
