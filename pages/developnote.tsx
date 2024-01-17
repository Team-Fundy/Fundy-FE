import devnotebg from "@/public/developnote/devnotebg.png";
import directionbtn from "@/public/home/button/directionbutton.png";
import Image from "next/image";
import { useState } from "react";
import DevNoteItem from "@/Components/DevNote/DevNoteItem";
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
    <div className="relative z-1 w-full h-full">
      <Image
        src={devnotebg}
        alt=""
        className="bg-cover relative z-0 -top-16 w-screen h-screen"
      />
      <div className="absolute z-2">
        <DevNoteList />
      </div>
      <div className="relative z-5 bottom-72">
        <div className="flex justify-around">
          <button onClick={onClickLeftBtn}>
            <Image src={directionbtn} alt="" />
          </button>
          <button onClick={onClickRightBtn}>
            <Image src={directionbtn} alt="" className="rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
