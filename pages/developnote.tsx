import devnotebg from "@/public/developnote/devnotebg.png";
import directionbtn from "@/public/home/button/directionbutton.png";
import Image from "next/image";
import { useState } from "react";
import DevNoteDetailModal from "@/Components/DevNote/DetailModal";
import DevNoteList from "@/Components/DevNote/DevNoteList";
import DevNoteLikeTab from "@/Components/DevNote/DevNoteLikeTab";

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
const maxPage = 7;

export default function DevelopNote() {
  const [nowPage, setNowPage] = useState<number>(1);
  const [pageList, setPageList] = useState<number[]>([-1, -1, 1, 2, 3]);
  const [openModal, setOpenModal] = useState(false);

  function onClickLeftBtn() {
    setPageList((pageList) => {
      const tempList = [...pageList];
      tempList.pop();
      tempList.unshift(nowPage - 3 >= 1 ? nowPage - 3 : -1);
      return pageList;
    });
    setNowPage((i) => (i === 1 ? 10 : i - 1));
  }
  function onClickRightBtn() {
    if (nowPage === maxPage) return;

    setPageList((pageList) => {
      const tempList = [...pageList];
      tempList.shift();
      tempList.push(
        nowPage + 3 === maxPage ? -2 : nowPage + 3 > maxPage ? -1 : nowPage + 3
      );
      return tempList;
    });
    setNowPage((i) => (i === maxPage ? 1 : i + 1));
  }
  return (
    <div className="relative">
      <div className="fixed z-50 h-full overflow-hidden">
        <Image
          src={devnotebg}
          alt=""
          className="bg-cover relative z-0 -top-16 w-screen h-screen scale-y-110"
        />
        <DevNoteList
          nowPage={nowPage}
          pageList={pageList}
          onClickDevNote={() => setOpenModal(true)}
        />
        <div className="absolute w-3/4 left-1/2 -translate-x-1/2 bottom-[20rem]">
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
        <DevNoteLikeTab
          nowPage={nowPage}
          likeList={[1321, 243, 213, 55, 234, 23, 99]}
        />
        {openModal && (
          <DevNoteDetailModal onClickExitButton={() => setOpenModal(false)} />
        )}
      </div>
    </div>
  );
}
