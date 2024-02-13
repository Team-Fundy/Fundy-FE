import devnotebg from "@/public/developnote/devnotebg.png";
import directionbtn from "@/public/home/button/directionbutton.png";
import Image from "next/image";
import { useState } from "react";
import DevNoteDetailModal from "@/Components/DevNote/DetailModal";
import DevNoteList from "@/Components/DevNote/DevNoteList";

export async function getServerSideProps() {
  return { props: { layout: "developnotepage" } };
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

export default function DevelopNote() {
  const [nowPage, setNowPage] = useState<number>(1);

  function onClickLeftBtn() {
    setNowPage((i) => (i == 1 ? 10 : i - 1));
  }
  function onClickRightBtn() {
    setNowPage((i) => (i == 10 ? 1 : i + 1));
  }
  return (
    <div className="relative z-1 h-full">
      <Image
        src={devnotebg}
        alt=""
        className="bg-cover relative z-0 -top-16 w-screen h-screen"
      />
      <DevNoteList />
      <div className="absolute w-3/4 left-[8rem] bottom-[24rem]">
        <div className="flex  justify-between">
          <button onClick={onClickLeftBtn}>
            <Image className=" w-[3rem] h-[3rem]" src={directionbtn} alt="" />
          </button>
          <button onClick={onClickRightBtn}>
            <Image
              className=" w-[3rem] h-[3rem] rotate-180"
              src={directionbtn}
              alt=""
            />
          </button>
        </div>
      </div>
      <DevNoteDetailModal />
    </div>
  );
}
