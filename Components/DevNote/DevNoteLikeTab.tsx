import Image from "next/image";
import HeadrIcon from "@/public/developnote/headrIcon.png";

interface DevNoteLikeTabProps {
  nowPage: number;
  likeList: number[];
}

const DevNoteLikeTab = ({ nowPage, likeList }: DevNoteLikeTabProps) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[3rem]">
      <p className="text-white text-center font-['dalmoori']">
        {likeList[nowPage]}
      </p>
      <button>
        <Image src={HeadrIcon} alt="" />
      </button>
    </div>
  );
};
export default DevNoteLikeTab;
