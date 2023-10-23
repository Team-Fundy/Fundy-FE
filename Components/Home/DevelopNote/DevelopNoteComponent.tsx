import developicon from "@/public/home/icon/developIcon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import Image from "next/image";
import DevelopNoteDaybar from "./DevelopNoteDaybar";
import DevelopNoteList from "./DevelopNoteList";
import { useState } from "react";

export default function DevelopNoteComponent() {

    const [selectedDay, setSelectedDay] = useState<string>("일");

    return (
        <div className="w-full bg-white">
            <div className="w-3/5 mx-auto">
                <div className="h-24 flex justify-between my-12">
                    <div className="w-full flex gap-4 my-6">
                        <Image src={developicon} alt="none" className="h-12" />
                        <p className="my-2 font-bold text-2xl">개발노트 </p>
                        <p className="my-3 ml-8 text-slate-300">장르별 프로젝트는 장르를 선택하여 머시깽이 하는 머시깽이 입니다.</p>
                    </div>
                    <button>
                        <Image src={entirebtn} alt="전체보기" />
                    </button>
                </div>
                <div className="my-4">
                    <DevelopNoteDaybar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                </div>
                <DevelopNoteList />
                <div className="h-16"></div>
            </div >
        </div>
    )
}
