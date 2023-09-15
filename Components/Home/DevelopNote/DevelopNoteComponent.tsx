import hoticon from "@/public/home/icon/hoticon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import Image from "next/image";
import DevelopNoteDaybar from "./DevelopNoteDaybar";
import DevelopNoteList from "./DevelopNoteList";
import { useState } from "react";

export default function DevelopNoteComponent() {

    const [selectedDay, setSelectedDay] = useState<string>("null");

    return (
        <div className="bg-gray-200 content-center">
            <div className="w-full h-24 flex justify-between">
                <div className="w-full flex place-items-center">
                    <Image src={hoticon} alt="none" className="h-12 " />
                    <p className="my-3 bold font-['dalmoori']">개발노트 </p>
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
    )
}
