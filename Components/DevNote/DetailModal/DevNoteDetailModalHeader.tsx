import Image from "next/image";
import XButtonIcon from "@/public/developnote/xButtonIcon.png";

interface DevNoteDetailModalHeader {
  onClickExitButton: () => void;
}

export default function DevNoteDetailModalHeader({
  onClickExitButton,
}: DevNoteDetailModalHeader) {
  return (
    <div className="w-full h-[7rem] bg-[#232426] text-white">
      <div className="px-16 h-fit mx-auto translate-y-1/2 ">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="w-2 h-14 bg-white" />
            <div>
              <p className="text-[0.8rem] font-light">
                첫번째 개발노트 - 9월 13일
              </p>
              <p className="text-[1.7rem]">새로운 시스템 관련</p>
            </div>
          </div>
          <button onClick={onClickExitButton}>
            <Image src={XButtonIcon} alt="xbutton" />
          </button>
        </div>
      </div>
    </div>
  );
}
