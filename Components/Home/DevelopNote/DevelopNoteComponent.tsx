import developicon from "@/public/home/icon/developIcon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
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
                    <button>
                        <Image src={entirebtn} alt="전체보기" />
                    </button>
                </div>
                <DevelopNoteDaybar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                <div className="mt-12">
                    <DevelopNoteList />
                </div>
                <div className="h-16"></div>
            </div >
            <div className="w-screen h-2 relative z-2 bottom-[38rem]">
                <div className="flex justify-between ">
                    {selectedNum ?
                        <button id="left" className="w-12 h-[21rem] bg-black opacity-75" onClick={onClickMoveBtn}>
                            <p className="font-['dalmoori'] text-white font-3xl">&lt;</p>
                        </button> : <div></div>
                    }
                    <button id="right" className="w-12 h-[21rem] bg-black opacity-75" onClick={onClickMoveBtn}>
                        <p className="font-['dalmoori'] text-white font-3xl">&gt;</p>
                    </button>
                </div>
            </div>
        </div >
    )
}
