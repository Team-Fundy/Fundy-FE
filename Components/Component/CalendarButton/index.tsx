import Image from "next/image";
import { useState } from "react";
import calandarIcon from "@/public/createproject/icon/calanderIcon.png";
import upArrowIcon from "@/public/createproject/icon/uparrowIcon.png";
import Calendar from "./Calendar";

interface CalendarButtonProps {
  day: Date | null;
  onSetDay: (day: Date | null) => void;
  classname?: string;
}

export default function CalendarButton({
  classname,
  onSetDay,
  day,
}: CalendarButtonProps) {
  const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);
  const onDay = new Date();

  const changeSelectedDay = (day: Date | null) => {
    onSetDay(day);
    setIsOpenCalendar(false);
  };

  function transStringDay(date: Date) {
    if (!date) return null;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  return (
    <div className={`h-fit ${classname}`}>
      <button
        onClick={() => setIsOpenCalendar((isOpenCalendar) => !isOpenCalendar)}
        className={`flex justify-between ${classname} h-[3.5rem] border-slate-400 border-2 border-md`}
      >
        <div className="flex ml-2 gap-2">
          <Image className="my-auto" src={calandarIcon} alt="calandarIcon" />
          <div>
            <p className="text-red-600">Select a Day</p>
            <p>{day ? transStringDay(day) : "날짜 선택"}</p>
          </div>
        </div>
        <Image
          className={`${isOpenCalendar ? "rotate-180" : ""} my-auto mr-4`}
          src={upArrowIcon}
          alt=""
        />
      </button>
      {isOpenCalendar && (
        <Calendar
          onSetDay={changeSelectedDay}
          isNextMonth={onDay}
          isPrevMonth={onDay}
        />
      )}
    </div>
  );
}
