import unClickdayboard from "@/public/home/button/developnotedaybutton.png"
import onClickdayboard from "@/public/home/button/developnotedaybutton2.png"
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
        <div className="w-full bg-white flex gap-24">
            {dayoftheweek.map((item, index) => (
                <button onClick={() => onClickDayBtn(item)} className="relative" key={index}>
                    <Image src={selectedDay === item ? onClickdayboard : unClickdayboard} alt="" className="w-28 h-12" />
                    <p className={`absolute bottom-4 inset-x-6  text-start leading-4  ${selectedDay === item ? `text-white` : `text-slate-150`}`}>
                        {item}
                    </p>
                </button>
            ))}
        </div>
    );
}
