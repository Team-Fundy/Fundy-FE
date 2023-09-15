import dayboard from "@/public/home/dayborder.png";
import Image from "next/image";
import { useState, useEffect } from "react";

type DevelopNoteDaybar = {
    selectedDay: any,
    setSelectedDay: any,
}


export default function DevelopNoteDaybar({ selectedDay, setSelectedDay }: DevelopNoteDaybar) {
    const dayoftheweek = ['일', '월', '화', '수', '목', '금', '토'];
    const [dayclassName, setDayClassName] = useState<Array<string>>([]);

    useEffect(() => {
        let arr;
        if (selectedDay !== "null")
            arr = Array.from({ length: 7 }, (item, index) => dayoftheweek[index] === selectedDay ? "w-full h-full object-cover brightness-100" : "w-full h-full object-cover brightness-75")
        else
            arr = Array.from({ length: 7 }, () => "w-full h-full object-cover brightness-100")
        setDayClassName(arr);
    }, [dayclassName]);

    function onClickDayBtn(item: string) {
        if (selectedDay === item)
            setSelectedDay("null");
        else
            setSelectedDay(item);
    }
    return (
        <div className="w-full bg-gray-200 flex justify-center">
            {dayoftheweek.map((item, index) => (
                <button onClick={() => onClickDayBtn(item)} className=" w-48 relative overflow-hidden" key={index}>
                    <Image src={dayboard} alt="" className={dayclassName[index]} />
                    <p className="absolute w-full font-['dalmoori'] bottom-2 inset-x-6 text-2xl text-xs text-start leading-4">
                        {item}
                    </p>
                </button>
            ))}
        </div>
    );
}
