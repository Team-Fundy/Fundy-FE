import RewardPackageAddForm from "./RewardPackageAddForm";
import AddRewwardPakcageButton from "./AddRewadPackageButton";
import RewardPackageItem from "./RewardPackageItem";
import { useState } from "react";

export default function RewardSetting() {
  const [rewardPackagelist, setRewardPackagelist] = useState<string[]>([]);

  return (
    <div>
      <div>
        <h2 className="text-[1.1rem] font-semibold">리워드 설정</h2>
        <p className="text-[0.8rem] text-gray-500 my-2">
          후원 아이템들을 모아서 하나의 리워드 구성을 만듭니다.
          <br />
          얼리버드 구성품목이나 VIP구성품목등 여러 종류의 리워드들을
          구성해보세요.
        </p>
        <div className="flex">
          <div className="flex"></div>
        </div>
      </div>
      <div className="flex">
        <RewardPackageAddForm />
        <div>
          {rewardPackagelist.length &&
            rewardPackagelist.map((_) => <RewardPackageItem />)}
          <AddRewwardPakcageButton
            onClickBtn={() => setRewardPackagelist((item) => [...item, "a"])}
          />
        </div>
      </div>
    </div>
  );
}
