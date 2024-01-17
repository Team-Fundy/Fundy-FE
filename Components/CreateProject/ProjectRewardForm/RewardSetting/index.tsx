import RewardPackageAddForm from "./RewardPackageAddForm";
import AddRewwardPakcageButton from "./AddRewadPackageButton";
import RewardPackageItem from "./RewardPackageItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface RewardPackageItemType {
  key: string;
  titleImage?: File;
  rewardItemList?: [];
  numLimit?: Number;
  deriveDate?: Date;
  minimumPrice?: Number;
}

export default function RewardSetting() {
  const [rewardPackagelist, setRewardPackagelist] = useState<
    RewardPackageItemType[]
  >([]);

  function AddRewardPackage() {
    setRewardPackagelist((packageList) => [...packageList, { key: uuidv4() }]);
  }

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
          <div className="flex flex-col">
            {rewardPackagelist.map((item) => (
              <RewardPackageItem rewardPackage={item} />
            ))}
          </div>
          <AddRewwardPakcageButton onClickBtn={AddRewardPackage} />
        </div>
      </div>
    </div>
  );
}
