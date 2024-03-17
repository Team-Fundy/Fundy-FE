import React from 'react';
import Image from 'next/image';
import likeIcon from "@/public/home/icon/unlikeIcon.png"
import shareIcon from "@/public/home/icon/shareIcon.png"

interface FundingDetailHeaderProps {
  genres: string[];
  title: string;
  likeCount: number;
  onLike: () => void;
  onShare: () => void;
}
const FundingDetailHeader: React.FC<FundingDetailHeaderProps> = ({ genres, title, likeCount, onLike, onShare }) => {
  return (
    <div>
      <div className="flex gap-2">
        {genres.map((genre, index) => (
          <p key={index} className="px-2 bg-slate-200 text-slate-500 text-sm">
            {genre}
          </p>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-2xl mt-4 mb-4 font-bold">{title}</p>
        {/* Todo: 상단 마진 mt-5로 하면 적용 안됨 이슈 */}

        <div className="flex gap-2 mt-4 mb-4">
          {/* Todo: 버튼 내 세로 중앙정렬 안됨, 버튼 크기 조절 안됨 이슈 */}
          <button onClick={onLike} className="flex items-center justify-center border-2 border-gray-300 py-1 px-4">
            <Image src={likeIcon} alt="Like" width={24} height={24} />
            <span className="text-sm ml-2">{likeCount}</span>
          </button>
          {/* Todo: 세로 중앙정렬이 안되서 일단 grid로 임시방편 완료. 추후에 수정해야함. */}
          <button onClick={onShare} className="grid place-items-center border-2 border-gray-300 px-6 ">
            <Image src={shareIcon} alt="Share" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundingDetailHeader;

