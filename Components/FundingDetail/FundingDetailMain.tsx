import React from 'react';
import FundingDetailHeader from '@/Components/FundingDetail/FundingDetailHeader';
import FundingDetailGallery from './FundingDetailGallery';
import FundingDetailDescription from './FundingDetailDescription';

import Temp from "@/public/home/temp/Frame 1145.png"
import Temp2 from "@/public/home/temp/image 39.png"
import Temp3 from "@/public/home/temp/image 16.png"

const FundingDetailMain = () => {
  const genres = ['전략', '캐주얼', '판타지'];
  const title = "카드 오브 던전 클래식";
  const likeCount = 234;

  const images = [Temp.src, Temp2.src, Temp3.src];
  const gameDetails = "게임에 대한 상세 설명...";
  
  const handleLike = () => {
    console.log('Like button clicked');
  };
  
  const handleShare = () => {
    console.log('Share button clicked');
  };

  return (
    <div>
      <div className="pt-24 pb-4">
      {/* Todo: 마진 값 적용 안됨, 패딩으로 수정해도 적용안됨 수정 필요 */}
        <FundingDetailHeader genres={genres} title={title} likeCount={likeCount} onLike={handleLike} onShare={handleShare} />
      </div>
      <div className="flex">
        <div className="w-3/5 p-4">
          <FundingDetailGallery images={images} />
        </div>
        <div className="w-2/5 p-4">
          <FundingDetailDescription details={gameDetails} />
        </div>
      </div>
    </div>
  );
};

export default FundingDetailMain;
