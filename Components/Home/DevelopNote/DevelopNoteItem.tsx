import board from "@/public/home/developnote-title-bg.png";
import tempimg from "@/public/home/temp/image 39.png";
import Image from "next/image";

export default function DevelopNoteItem() {
    const title = "던전에 어서와";
    const developNote_weekNum = "1";
    return (
        <div>
            <button className=" w-64 relative z-0 overflow-hidden">
                <Image src={board} alt="" className="w-full h-full object-cover" />
                <Image src={tempimg} alt="" className="relative z-1 bottom-[20rem] left-[5.5rem] w-24 h-32 border-2 border-white" />
                <div className="absolute bottom-[13rem] left-[1rem]">
                    <p className="text-2xl font-bold text-white">{title}</p>
                    <p className="bg-[#583B6A] text-[#D0CCFF] font-semibold text-sm text-left px-2 py-1 my-2 w-fit rounded">{developNote_weekNum}주차 개발노트</p>
                </div>
            </button>
        </div>
    );
}
