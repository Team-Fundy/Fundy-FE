interface RewardPackageItemType {
  rewardPackage: {
    key: string;
    titleImage?: File;
    rewardItemList?: [];
    numLimit?: Number;
    deriveDate?: Date;
    minimumPrice?: Number;
  };
}

export default function RewardPackageItem({
  rewardPackage,
}: RewardPackageItemType) {
  const {
    key,
    titleImage,
    rewardItemList,
    numLimit,
    deriveDate,
    minimumPrice,
  } = rewardPackage;

  function RewardListItem() {
    return (
      <li className="flex gap-2">
        <p className="w-1 h-1 my-auto ml-2 rounded-full bg-black"></p>
        <p>리워드 제품</p>
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
    return `${date.getFullYear}년 ${date.getMonth() + 1}월 ${date.getDay}일`;
  }

  function onClickRewardPackageContainer() {}

  return (
    <button
      onClick={onClickRewardPackageContainer}
      className="w-[28rem] rounded-lg bg-white my-4"
    >
      <div className="w-[24rem] mx-auto py-6">
        <p>리워드 타이틀</p>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <p className="text-[1.5rem] font-semibold text-purple-600">
              {minimumPrice ? minimumPrice.toString() : "0"}
            </p>
            <p className="text-[0.9rem] mt-2">원</p>
          </div>
          <button>+</button>
        </div>
        <ul>
          {rewardItemList && rewardItemList.map((item) => <RewardListItem />)}
        </ul>
        <ul>
          {numLimit && OptionItem("수량제한", `${numLimit}개`)}
          {deriveDate &&
            OptionItem("예상 전달일", `${convertDateToString(deriveDate)}`)}
          {OptionItem("배송비", "3000원")}
        </ul>
        <hr className="my-3" />
      </div>
    </button>
  );
}
