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
      <p className="my-4 text-gray-500">{details}</p>
      <p>펀딩 기간</p>
      <p>{duration}일</p>
      <p>개발 노트 업로드</p>
      <p>{convertedWeek}마다 {convertedDay}에 업로드 예정</p>
      <div className="my-4">
        <p>
          현재 펀딩 금액: {currentAmount.toLocaleString()}원 / 목표 금액: {targetAmount.toLocaleString()}원 ({fundingPercentage}% 달성)
        </p>
      </div>
      <button className="bg-black text-white py-2 px-4 rounded">개발 노트 확인하기</button>
    </div>
  );
};

export default FundingDetailDescription;