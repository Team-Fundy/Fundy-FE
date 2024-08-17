import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCreateProjectStore } from "@/store/createProjectStore";

import promtionBtn from "@/public/createproject/promotionbtn.png";
import fundingBtn from "@/public/createproject/fundingbtn.png";
import leftdirBtn from "@/public/createproject/leftdirbtn.png";
import checkedIcon from "@/public/createproject/checkedicon.png";

export default function SelectProjectTypeComponent() {
  const [selectedProjectType, setSelectedProjectType] =
    useState<string>("null");
  const { setPage } = useCreateProjectStore();
  function onClickNextBtn() {
    if (selectedProjectType === "null") {
      alert("프로젝트 종류를 선택해주세요");
      return;
    }
    setPage("createNotice");
  }

  return (
    <div className="w-3/5 mx-auto my-8">
      <p className="text-lg font-semibold my-2">프로젝트 선택하기</p>
      <div className="flex px-3 my-6  justify-between gap-3">
        <button
          className="hover:scale-105 relative"
          onClick={() => setSelectedProjectType("promotion")}
        >
          <Image src={promtionBtn} alt="promotionButton" />
          {selectedProjectType === "promotion" ? (
            <Image
              className="absolute w-4 h-4 top-[4.5%] left-[6%]"
              src={checkedIcon}
              alt="checkIcon"
            />
          ) : null}
        </button>
        <button
          className="hover:scale-105 relative"
          onClick={() => setSelectedProjectType("funding")}
        >
          <Image src={fundingBtn} alt="fundingButton" />
          {selectedProjectType === "funding" ? (
            <Image
              className={`absolute w-4 h-4 top-[4.5%] left-[6%]`}
              src={checkedIcon}
              alt="checkIcon"
            />
          ) : null}
        </button>
      </div>
      <div className="flex justify-between">
        <Link href="/" className="flex gap-1">
          <Image
            src={leftdirBtn}
            alt="leftButton"
            className="w-3 h-3 my-auto"
          />
          <p className="my-auto text-gray-500 text-sm">뒤로가기</p>
        </Link>
        <button className="w-44 h-10 bg-white" onClick={onClickNextBtn}>
          다음으로
        </button>
      </div>
    </div>
  );
}
