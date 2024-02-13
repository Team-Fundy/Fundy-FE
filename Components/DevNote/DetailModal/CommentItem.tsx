import Image from "next/image";
import { useState } from "react";
import CommentOption from "./CommentOption";

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
  const [openOptiion, setOpenOption] = useState(false);
  return (
    <div className="flex justify-between my-6">
      <div className="flex gap-8 text-white">
        <Image
          className="w-[4rem] h-[4rem]"
          src={peopleIcon}
          alt="profileImage"
        />
        <div>
          <div className="flex gap-2">
            <p className="font-bold">{owner}</p>
            <p className="text-[0.7rem] mt-1 font-light ">{createTime}</p>
          </div>
          <p className="font-light">{detail}</p>
          <div className="flex gap-1">
            <Image
              className="w-[1rem] h-[1rem] mt-1"
              src={unLikeIcon}
              alt="unlikeIcon"
            />
            <p>{likeNum.toString()}</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => setOpenOption(true)}
          className="rotate-90 text-white text-[2rem]"
        >
          ...
        </button>
        {openOptiion && <CommentOption />}
      </div>
    </div>
  );
}
