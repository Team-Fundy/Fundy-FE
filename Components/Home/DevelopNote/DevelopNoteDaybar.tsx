import unClickdayboard from "@/public/home/button/crossShapeWhiteButton.png"
import onClickdayboard from "@/public/home/button/crossShapeWhitePurple.png"
import Image from "next/image";
import { useState, useEffect } from "react";

type DevelopNoteDaybar = {
    selectedDay: any,
    setSelectedDay: any,
}


export default function DevelopNoteDaybar({ selectedDay, setSelectedDay }: DevelopNoteDaybar) {
    const dayoftheweek = ['일', '월', '화', '수', '목', '금', '토'];


    function onClickDayBtn(item: string) {
        if (selectedDay === item)
            setSelectedDay("null");
        else
            setSelectedDay(item);
    }
    return (
        <div className="w-full bg-white flex justify-between">
            {dayoftheweek.map((item, index) => (
                <button onClick={() => onClickDayBtn(item)} className="w-20 relative" key={index}>
                    <Image src={selectedDay === item ? onClickdayboard : unClickdayboard} alt="" className="w-20 h-12" />
                    <p className={`absolute bottom-4 left-8 text-lg font-semibold leading-4   ${selectedDay === item ? `text-white` : `text-slate-400`}`}>
                        {item}
                    </p>
                </button>
            ))}
        </div>
    );
}
