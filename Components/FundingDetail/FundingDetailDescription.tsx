import React from 'react';

interface FundingDetailDescriptionProps {
  details: string;
}

const FundingDetailDescription: React.FC<FundingDetailDescriptionProps> = ({ details }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">게임 디테일</h2>
      <p>{details}</p>
    </div>
  );
};

export default FundingDetailDescription;
