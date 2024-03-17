import React from 'react';
import FundingDetailHeader from '@/Components/FundingDetail/FundingDetailHeader';

const FundingDetailMain = () => {
  const genres = ['전략', '캐주얼', '판타지'];
  const title = "카드 오브 던전 클래식";
  const likeCount = 234;
  
  const handleLike = () => {
    console.log('Like button clicked');
  };
  
  const handleShare = () => {
    console.log('Share button clicked');
  };

  return (
    <div className="pt-24 pb-4">
      {/* Todo: 마진 값 적용 안됨, 패딩으로 수정해도 적용안됨 수정 필요 */}
      <FundingDetailHeader genres={genres} title={title} likeCount={likeCount} onLike={handleLike} onShare={handleShare} />
    </div>
  );
};

export default FundingDetailMain;
