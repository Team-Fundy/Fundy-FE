import RewardPackageAddForm from "./RewardPackageAddForm";
import AddRewwardPakcageButton from "./AddRewadPackageButton";
import RewardPackageItem from "./RewardPackageItem";
import { RewardPackageItemType } from "../type/types";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function RewardSetting() {
  const [id, setId] = useState<string | null>(null);
  const [rewardPackagelist, setRewardPackagelist] = useState<
    RewardPackageItemType[]
  >([]);
  const [selectedRewardPackage, setSelectedRewardPackage] =
    useState<RewardPackageItemType>();

  function AddRewardPackage() {
    const id = uuidv4();
    setRewardPackagelist((packageList) => [...packageList, { id }]);
    setId(id);
  }

  function upDateRewardPackage(item: RewardPackageItemType) {
    let temp = rewardPackagelist;
    for (let index in temp) {
      if (item.id === temp[index].id) {
        temp[index] = item;
      }
    }
    setRewardPackagelist(temp);
    console.log(temp);
  }

  useEffect(() => {
    setSelectedRewardPackage(rewardPackagelist.find((item) => item.id === id));
  }, [id]);

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
        <RewardPackageAddForm
          rewardPackage={selectedRewardPackage}
          onClickEnrollButon={upDateRewardPackage}
        />
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
