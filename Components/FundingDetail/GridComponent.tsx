import React, { useState } from 'react';
import Image from 'next/image';
import searchIcon from "@/public/fundingdetail/searchIcon.png";
import budgetIcon from "@/public/fundingdetail/budgetIcon.png";
import calendarIcon from "@/public/fundingdetail/calendarIcon.png";
import loudspeakerIcon from "@/public/fundingdetail/loudspeakerIcon.png";
import personIcon from "@/public/fundingdetail/personIcon.png";

const GridComponent: React.FC = () => {
  const [hoverIntro, setHoverIntro] = useState(false);
  const [hoverBudget, setHoverBudget] = useState(false);
  const [hoverSchedule, setHoverSchedule] = useState(false);
  const [hoverTeam, setHoverTeam] = useState(false);
  const [hoverSupport, setHoverSupport] = useState(false);

  return (
    <div className="w-[415px] grid grid-cols-2 grid-rows-3 gap-[15px]">
      {/* 소개 div */}
      <div
        className="group w-[200px] h-[200px] bg-[#EC5827] rounded-2xl overflow-hidden relative cursor-pointer transition-opacity duration-500"
        style={{ opacity: hoverIntro ? 1 : 0.3 }}
        onMouseEnter={() => setHoverIntro(true)}
        onMouseLeave={() => setHoverIntro(false)}
      >
        <span
        className="transition-all duration-300 ease-in-out absolute text-2xl font-bold"
        style={{ top: hoverIntro ? '75%' : '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          소개
        </span>
        <div className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ease-in-out ${hoverIntro ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: hoverIntro ? 'translateY(-5%)' : 'translateY(-100%)' }}>
          <Image
            src={searchIcon}
            alt="소개"
            width={75}
            height={75}
          />
        </div>
      </div>
      {/* 예산 div */}
      <div
        className="group w-[200px] h-[200px] bg-[#F8AE0D] rounded-2xl overflow-hidden relative cursor-pointer transition-opacity duration-500"
        style={{ opacity: hoverBudget ? 1 : 0.3 }}
        onMouseEnter={() => setHoverBudget(true)}
        onMouseLeave={() => setHoverBudget(false)}
      >
        <span
        className="transition-all duration-300 ease-in-out absolute text-2xl font-bold"
        style={{ top: hoverBudget ? '75%' : '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          예산
        </span>
        <div className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ease-in-out ${hoverBudget ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: hoverBudget ? 'translateY(-5%)' : 'translateY(-100%)' }}>
          <Image
            src={budgetIcon}
            alt="예산"
            width={75}
            height={75}
          />
        </div>
      </div>
      {/* 일정 div */}
      <div
        className="group w-[200px] h-[200px] bg-[#45B640] rounded-2xl overflow-hidden relative cursor-pointer transition-opacity duration-500"
        style={{ opacity: hoverSchedule ? 1 : 0.3 }}
        onMouseEnter={() => setHoverSchedule(true)}
        onMouseLeave={() => setHoverSchedule(false)}
      >
        <span
        className="transition-all duration-300 ease-in-out absolute text-2xl font-bold"
        style={{ top: hoverSchedule ? '75%' : '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          일정
        </span>
        <div className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ease-in-out ${hoverSchedule ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: hoverSchedule ? 'translateY(-5%)' : 'translateY(-100%)' }}>
          <Image
            src={calendarIcon}
            alt="일정"
            width={75}
            height={75}
          />
        </div>
      </div>
      {/* 팀소개 div */}
      <div
        className="group w-[200px] h-[200px] bg-[#3996B2] rounded-2xl overflow-hidden relative cursor-pointer transition-opacity duration-500"
        style={{ opacity: hoverTeam ? 1 : 0.3 }}
        onMouseEnter={() => setHoverTeam(true)}
        onMouseLeave={() => setHoverTeam(false)}
      >
        <span
        className="transition-all duration-300 ease-in-out absolute text-2xl font-bold"
        style={{ top: hoverTeam ? '75%' : '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          팀소개
        </span>
        <div className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ease-in-out ${hoverTeam ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: hoverTeam ? 'translateY(-5%)' : 'translateY(-100%)' }}>
          <Image
            src={personIcon}
            alt="팀소개"
            width={75}
            height={75}
          />
        </div>
      </div>
      {/* 후원안내 div */}
      <div
        className="group w-[200px] h-[200px] bg-[#FFFFFF] rounded-2xl overflow-hidden relative cursor-pointer transition-opacity duration-500"
        style={{ opacity: hoverSupport ? 1 : 0.3 }}
        onMouseEnter={() => setHoverSupport(true)}
        onMouseLeave={() => setHoverSupport(false)}
      >
        <span
        className="transition-all duration-300 ease-in-out absolute text-2xl font-bold text-black whitespace-nowrap text-center"
        style={{ top: hoverSupport ? '75%' : '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          후원 안내
        </span>
        <div className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ease-in-out ${hoverSupport ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: hoverSupport ? 'translateY(-5%)' : 'translateY(-100%)' }}>
          <Image
            src={loudspeakerIcon}
            alt="후원 안내"
            width={75}
            height={75}
          />
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
