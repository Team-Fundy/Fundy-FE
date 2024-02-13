import Image from "next/image";
import peopleIcon from "@/public/developnote/peopleIcon.png";
import unLikeIcon from "@/public/home/icon/unlikeIcon.png";
import LikeIcon from "@/public/home/icon/likeIcon.png";

interface CommentItemProps {
  owner: string;
  createTime: string;
  detail: string;
  likeNum: number;
}

export default function CommentItem({
  owner,
  createTime,
  detail,
  likeNum,
}: CommentItemProps) {
  return (
    <div className="flex justify-between w-3/4">
      <div className="flex gap-4">
        <Image
          className="w-[4rem] h-[4rem]"
          src={peopleIcon}
          alt="profileImage"
        />
        <div className="text-white">
          <div className="flex gap-2">
            <p className="font-bold">{owner}</p>
            <p className="text-[0.5rem] text-end font-light">{createTime}</p>
          </div>
          <p>{detail}</p>
          <div className="flex">
            <Image
              className="w-[1rem] h-[1rem]"
              src={unLikeIcon}
              alt="unlikeIcon"
            />
            <p>{likeNum.toString()}</p>
          </div>
        </div>
      </div>
      <button className="rotate-90">...</button>
    </div>
  );
}
