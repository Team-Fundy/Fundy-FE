import developicon from "@/public/home/icon/developIcon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import unDirBtn from "@/public/home/button/leftDirectionWhiteButton.png"
import onDirBtn from "@/public/home/button/rightDirectionBlackButton.png"
import Image from "next/image";
import DevelopNoteDaybar from "./DevelopNoteDaybar";
import DevelopNoteList from "./DevelopNoteList";
import { useState } from "react";

export default function DevelopNoteComponent() {

    const [selectedDay, setSelectedDay] = useState<string>("일");
    const [selectedNum, setSelectedNum] = useState<number>(0);
    
    function onClickMoveBtn(event: any) {
        const btnId = event.target.id;
        if (btnId === "left") {
            setSelectedNum((num: number) => num === 0 ? num = 0 : num -= 1);
        }
        else
            setSelectedNum((num: number) => num += 1);
    }

    return (
        <div className="w-full bg-white relative z-0">
            <div className="w-3/5 mx-auto">
                <div className="h-24 flex justify-between my-12">
                    <div className="w-full flex gap-4 my-6">
                        <Image src={developicon} alt="none" className="h-12" />
                        <p className="my-2 font-bold text-2xl">개발노트 </p>
                        <p className="my-3 ml-8 text-slate-300">장르별 프로젝트는 장르를 선택하여 머시깽이 하는 머시깽이 입니다.</p>
                    </div>
                    <div className ="flex">
                    <button>
                        <Image src={entirebtn} alt="전체보기" />
                    </button>
                    <button className ="flex my-auto gap-2">
                        <Image src={unDirBtn} alt="leftbtn"></Image>
                        <Image src={onDirBtn} alt="rightbtn"></Image>
                    </button>
                    </div>
                </div>
                <DevelopNoteDaybar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                <div className="mt-12">
                    <DevelopNoteList />
                </div>
                <div className="h-16"></div>
            </div >
        </div >
    )
}
