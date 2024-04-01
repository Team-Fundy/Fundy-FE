import temp from "@/public/home/temp/image 18 (1).png";
import Image from "next/image";

import AddExpectedDevNoteItem from "./AddExpectedDevNote";
import DevNoteItem from "@/Components/DevNote/DevNoteItem";
import devnameboard from "@/public/developnote/devnotedayboard.png";

interface DevNoteListProps {
  onClickDevNote: () => void;
  nowPage: number;
  pageList: number[];
}

const Kor = [
  "첫",
  "두",
  "세",
  "네",
  "다섯",
  "여섯",
  "일곱",
  "여덟",
  "아홉",
  "열",
  "열한",
  "열두",
];

const maxPage = 7;

export default function DevNoteList({
  onClickDevNote,
  nowPage,
  pageList,
}: DevNoteListProps) {
  const getDevitem = (pageNum: number, index: number) => {
    switch (pageNum) {
      case -1:
        return <div className="w-[13.3em]"></div>;
      case -2:
        return <AddExpectedDevNoteItem spotlight={index === 2} />;
      default:
        return (
          <button onClick={onClickDevNote}>
            <DevNoteItem
              spotlight={index === 2}
              img={temp}
              day="2023. 04. 08"
            />
          </button>
        );
    }
  };

  return (
    <div className="absolute top-0 w-screen">
      <div className="w-screen">
        <div className="w-fit text-white mt-12 mx-auto z-4">
          <p className="w-fit mx-auto my-4"> {Kor[nowPage - 1]}번째 개발노트</p>
          <Image src={devnameboard} alt="" />
          {maxPage !== nowPage ? (
            <p className="relative z-5 bottom-10 left-24 text-xl text-black font-bold">
              새로운 시스템 개발
            </p>
          ) : (
            <p className="relative z-5 bottom-10 left-[8.8rem] text-xl text-black font-bold">
              출시 예정
            </p>
          )}
        </div>
        <div className="mt-[2.5rem] flex flex-nowrap mx-auto overflow-auto w-fit gap-12 ">
          {pageList.map((pageNum, index) => getDevitem(pageNum, index))}
        </div>
      </div>
    </div>
  );
}
