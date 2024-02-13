import Image from "next/image";
import modyfiyIcon from "@/public/developnote/modifyIcon.png";
import trashIcon from "@/public/developnote/trashIcon.png";
import declarationIcon from "@/public/developnote/declarationIcon.png";

export default function CommentOption() {
  return (
    <div className="absolute w-fit h-fit text-black">
      <div className="bg-white rounded-md w-fit h-fit pl-4 pr-8 py-3">
        <button
          className="flex gap-1 mb-2 w-16"
          onClick={() => console.log("modify")}
        >
          <Image src={modyfiyIcon} alt="modyfiIcon" />
          수정
        </button>
        <button
          className="flex gap-1 w-16"
          onClick={() => console.log("trashIcon")}
        >
          <Image src={trashIcon} alt="trashIcon" />
          삭제
        </button>
      </div>
      <div className="bg-white rounded-md pl-4 pr-8 py-3 mt-6">
        <button
          className="flex gap-1  w-16"
          onClick={() => console.log("declarationIcon")}
        >
          <Image src={declarationIcon} alt="declarationIcon" />
          신고
        </button>
      </div>
    </div>
  );
}
