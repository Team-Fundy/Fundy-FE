// 필요한 라이브러리와 스타일시트를 import합니다.
import React, { useState } from "react";
import Image from "next/image";
import upArrowIcon from "@/public/createproject/icon/uparrowIcon.png";

interface CalendarProps {
  onSetDay: (date: Date | null) => void;
  isPrevMonth: Date;
  isNextMonth: Date;
}

const Calendar = ({ isPrevMonth, isNextMonth, onSetDay }: CalendarProps) => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSameDay = (toDay: Date, compareDay?: Date | null) => {
    if (
      toDay.getFullYear() === compareDay?.getFullYear() &&
      toDay.getMonth() === compareDay?.getMonth() &&
      toDay.getDate() === compareDay?.getDate()
    ) {
      return true;
    }
    return false;
  };

  const onClickDay = (day: Date) => {
    if (isSameDay(day, selectedDay)) {
      onSetDay(null);
    } else {
      setSelectedDay(day);
      onSetDay(day);
    }
  };

  const prevCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        currentMonth.getDate()
      )
    );
  };

  const nextCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        currentMonth.getDate()
      )
    );
  };

  const buildCalendarDays = () => {
    const curMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const curMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const prevMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0
    );
    const nextMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    const days: Date[] = Array.from({ length: curMonthStartDate }, (_, i) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        prevMonthEndDate.getDate() - i
      );
    }).reverse();

    days.push(
      ...Array.from(
        { length: curMonthEndDate.getDate() },
        (_, i) =>
          new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
      )
    );

    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      days.push(
        ...Array.from(
          { length: remainingDays },
          (_, i) =>
            new Date(
              nextMonthStartDate.getFullYear(),
              nextMonthStartDate.getMonth(),
              i + 1
            )
        )
      );
    }
    return days;
  };

  const buildCalendarTag = (calendarDays: Date[]) => {
    return calendarDays.map((day: Date, i: number) => {
      if (day.getMonth() < currentMonth.getMonth()) {
        return <td key={i} className="prevMonthDay"></td>;
      }
      if (day.getMonth() > currentMonth.getMonth()) {
        return <td key={i} className="nextMonthDay"></td>;
      }
      if (day < today) {
        return (
          <td key={i} className="bg-gray-300 text-white">
            {day.getDate()}
          </td>
        );
      }
      return (
        <td
          className="hover:bg-purple-500 hover:text-white"
          onClick={() => onClickDay(day)}
          key={i}
        >
          {day.getDate()}
        </td>
      );
    });
  };

  const divideWeek = (calendarTags: JSX.Element[]) => {
    return calendarTags.reduce(
      (acc: JSX.Element[][], day: JSX.Element, i: number) => {
        if (i % 7 === 0) acc.push([day]);
        else acc[acc.length - 1].push(day);
        return acc;
      },
      []
    );
  };

  const calendarDays = buildCalendarDays();
  const calendarTags = buildCalendarTag(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <div className="my-1 w-full bg-white px-4 py-6 border-2 border-slate-400 rounded-md">
      <div className="w-full flex justify-between">
        <span className="font-bold text-slate-500">
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </span>
        <div className="flex gap-3">
          <button data-testid="prevMonth" onClick={prevCalendar}>
            <Image src={upArrowIcon} className="-rotate-90" alt="left" />
          </button>
          <button data-testid="nextMonth" onClick={nextCalendar}>
            <Image src={upArrowIcon} className="rotate-90" alt="right" />
          </button>
        </div>
      </div>
      <table className="my-2 text-center">
        <thead>
          <tr>
            {daysOfWeek.map((day, i) => (
              <th key={i} className="w-16 h-8 mx-4">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="my-4">
          {calendarRows.map((row: JSX.Element[], i: number) => (
            <tr>{row}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
