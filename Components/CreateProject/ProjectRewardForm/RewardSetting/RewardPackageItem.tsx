import { RewardPackageItemProps } from "../type/types";
import Image from "next/image";

interface RewardListItem {
  itemName: string;
}

export default function RewardPackageItem({
  rewardPackage,
}: RewardPackageItemProps) {
  if (!rewardPackage) return;
  const {
    id,
    titleName,
    titleImage,
    rewardItemList,
    numLimit,
    deriveDate,
    minimumPrice,
    selectedItemNum,
    isShip,
  } = rewardPackage;

  function RewardListItem({ itemName }: RewardListItem) {
    return (
      <li className="flex gap-2">
        <p className="w-1 h-1 my-auto ml-2 rounded-full bg-black"></p>
        <p>{itemName}</p>
      </li>
    );
  }

  function OptionItem(textA: string, textB: string) {
    return (
      <li>
        <hr className="my-3" />
        <div className="flex justify-between gap-2">
          <p className="text-[1.2rem] text-gray-500">{textA}</p>
          <p className="text-[1.2rem] text-purple-600 font-semibold">{textB}</p>
        </div>
      </li>
    );
  }
  function convertDateToString(date: Date) {
    if (!date) return null;
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDay()}일`;
  }

  function onClickRewardPackageContainer() {}

  return (
    <button
      onClick={onClickRewardPackageContainer}
      className="w-[28rem] rounded-lg bg-white my-4"
    >
      <div className="w-[24rem] mx-auto py-6">
        <div className="flex gap-6 mb-8">
          {titleImage ? (
            <Image
              src={URL.createObjectURL(titleImage)}
              alt="img"
              className="w-28 h-28"
              width="100"
              height="100"
            />
          ) : null}
          <div className=" text-left">
            <p className="text-2xl">
              {titleName ? titleName : "리워드 타이틀"}
            </p>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <p className="text-[1.5rem] font-semibold text-purple-600">
                  {minimumPrice ? minimumPrice.toString() : "0"}
                </p>
                <p className="text-[0.9rem] mt-2">원</p>
              </div>
              <button>+</button>
            </div>
          </div>
        </div>
        <ul>
          {selectedItemNum &&
            selectedItemNum.map((item) => <RewardListItem itemName={item} />)}
        </ul>
        <ul>
          {numLimit && OptionItem("수량제한", `${numLimit}개`)}
          {deriveDate &&
            OptionItem("예상 전달일", `${convertDateToString(deriveDate)}`)}
          {isShip && OptionItem("배송비", "3000원")}
        </ul>
        <hr className="my-3" />
      </div>
    </button>
  );
}
