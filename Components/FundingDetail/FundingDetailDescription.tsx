import React from 'react';

interface FundingDetailDescriptionProps {
  details: string;
  fundingStartDate: string;
  updatePeriod: string;
  updateDay: string;
  targetAmount: number;
  currentAmount: number;
}

type DaysMap = {
  [key: string]: string;
};

const convertDay = (day: string) => { 
  const daysMap: DaysMap = {
    monday: '월요일',
    tuesday: '화요일',
    wednesday: '수요일',
    thursday: '목요일',
    friday: '금요일',
    saturday: '토요일',
    sunday: '일요일',
  };
  const lowerDay = day.toLowerCase();
  return daysMap[lowerDay] || day;
};

const convertWeek = (week: string) => { 
  return week.replace('week', '주');
};

const calculateFundingDuration = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();
  const difference = Math.abs(now.getTime() - start.getTime());
  return Math.ceil(difference / (1000 * 60 * 60 * 24));
};

const FundingDetailDescription: React.FC<FundingDetailDescriptionProps> = ({
  details,
  fundingStartDate,
  updatePeriod,
  updateDay,
  targetAmount,
  currentAmount,
}) => {
  const duration = calculateFundingDuration(fundingStartDate);
  const fundingPercentage = ((currentAmount / targetAmount) * 100).toFixed(2);
  const convertedDay = convertDay(updateDay);
  const convertedWeek = convertWeek(updatePeriod);
  return (
    <div>
      <p className="my-4 text-gray-700 text-sm">{details}</p>
      <div className="mb-6">
        <p className="text-base font-bold">펀딩 기간</p>
        <p className="text-xl text-gray-700">
          <span className="text-3xl text-purpleblue font-bold">{duration}</span>
          일
        </p>
      </div>
      <div className="mb-8">
        <p className="text-base font-bold">개발 노트 업로드</p>
        <p className="text-xl text-gray-700">
          <span className="text-3xl text-purpleblue font-bold">{convertedWeek}</span>
          마다
          <span className="text-3xl text-purpleblue font-bold">{convertedDay}</span>
          에 업로드 예정
        </p>
      </div>
      
      <div className="my-4">
        <p className="text-base font-bold">총 펀딩 금액</p>
        <span className="text-xl text-gray-700">
          <span className="text-3xl text-purpleblue font-bold">{currentAmount.toLocaleString()}</span>
          원
        </span>
        <span>({fundingPercentage}% 달성)</span>
        <div className="mt-3">
          <span className="text-sm text-[#232426]" >목표 금액:</span>
          <span className="text-sm text-[#232426] text-opacity-60" >{targetAmount.toLocaleString()}원</span>
        </div>
      </div>
      <button className="bg-black text-white py-2 px-4 rounded">개발 노트 확인하기</button>
    </div>
  );
};

export default FundingDetailDescription;