import board from "@/public/home/developnote-title-bg.png";
import tempimg from "@/public/home/temp/image 39.png";
import footerImg from   "@/public/home/developnote-title-footer.png";
import Image from "next/image";

export default function DevelopNoteItem() {
    const title = "던전에 어서와";
    const developNote_weekNum = "1";
    return (
        <div className ="relative z-0">
 
            <button className="w-52 relative z-2">
                <Image src={board} alt="" className="w-52 object-cover" />
                <Image src={tempimg} alt="" className="absolute z-1 bottom-[6.5rem] left-[4.3rem] w-20 h-28 border-1 border-white" />
                <div className="absolute bottom-[1.5rem] left-[1.5rem]">
                    <p className="text-lg font-bold text-white">{title}</p>
                    <p className="bg-[#583B6A] text-[#D0CCFF] font-semibold text-[0.5rem] text-left px-2 py-1 w-fit rounded">{developNote_weekNum}주차 개발노트</p>
                </div>
            </button>
            <Image src={footerImg} alt ="none" className ="absolute z-0 bottom-1"/>
        </div>
    );
}
