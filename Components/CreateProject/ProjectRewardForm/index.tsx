import ItemSetting from "./ItemSetting";
import RewardSetting from "./RewardSetting";
import { useState } from "react";

export default function ProjectRewarodForm() {
  return (
    <div className="my-[6rem]">
      <div>
        <h1 className="my-3 font-bold text-4xl">리워드 작성</h1>
        <p className="text-[0.75rem] text-gray-700 mb-8">
          후원자들이 보상을 받을 수 있는 리워드들을 준비해보세요.
        </p>
      </div>
      <br />
      <div>
        <h2 className="text-[1.1rem] font-semibold">아이템 설정</h2>
        <p className="text-[0.8rem] text-gray-500 my-2">
          아이템 설정은 리워드에 포함되는 구성 품목을 설정합니다. <br /> 게임을
          후원해준 사람들에게 고마운 마음을 담아서 의미있는 리워드를 만들어
          보세요.
        </p>
      </div>
      <ItemSetting />
      <RewardSetting />
    </div>
  );
}
