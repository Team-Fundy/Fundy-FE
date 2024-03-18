import React from 'react';
import FundingDetailHeader from '@/Components/FundingDetail/FundingDetailHeader';
import FundingDetailGallery from '@/Components/FundingDetail/FundingDetailGallery';
import FundingDetailDescription from '@/Components/FundingDetail/FundingDetailDescription';

import Temp from "@/public/home/temp/Frame 1145.png"
import Temp2 from "@/public/home/temp/image 39.png"
import Temp3 from "@/public/home/temp/image 16.png"

const FundingDetailMain = () => {
  const genres = ['전략', '캐주얼', '판타지'];
  const title = "카드 오브 던전 클래식";
  const likeCount = 234;

  const images = [Temp.src, Temp2.src, Temp3.src];
  
  const details = "A physics-based co-op platformer about a guy i a raA physics-based co-op platformer about a guy in a rabbit costume! Team up with a friend or three (local or online) to beat levels, find hidden carrots and race against the clock. Experience bunny madness. ";
  const fundingStartDate = "2023-03-10";
  const updatePeriod = "2week";
  const updateDay = "Tuesday";
  const targetAmount = 5000000;
  const currentAmount = 20294500;

  const handleLike = () => {
    console.log('Like button clicked');
  };
  
  const handleShare = () => {
    console.log('Share button clicked');
  };

  return (
    <div>
      <div className="pt-16">
      {/* Todo: 마진 값 적용 안됨, 패딩으로 수정해도 적용안됨 수정 필요 */}
        <FundingDetailHeader genres={genres} title={title} likeCount={likeCount} onLike={handleLike} onShare={handleShare} />
      </div>
      <div className="flex">
        <div className="w-3/5 py-4">
          <FundingDetailGallery images={images} />
        </div>
        <div className="w-2/5 p-4">
          <FundingDetailDescription
            details={details}
            fundingStartDate={fundingStartDate}
            updatePeriod={updatePeriod}
            updateDay={updateDay}
            targetAmount={targetAmount}
            currentAmount={currentAmount}/>
        </div>
      </div>
    </div>
  );
};

export default FundingDetailMain;
