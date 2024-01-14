export default function RewardPackageItem() {
  const cost = "5,000";
  const numLimit = 50;

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
  return (
    <div className="w-[28rem] rounded-lg bg-white my-4">
      <div className="w-[24rem] mx-auto py-6">
        <p>리워드 타이틀</p>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <p className="text-[1.5rem] font-semibold text-purple-600">
              {cost}
            </p>
            <p className="text-[0.9rem] mt-2">원</p>
          </div>
          <button>+</button>
        </div>
        <ul>
          <RewardListItem />
          <RewardListItem />
          <RewardListItem />
        </ul>
        <ul>
          {OptionItem("수량제한", "50개")}
          {OptionItem("예상 전달일", "2025년 4월 1일")}
          {OptionItem("배송일", "3000원")}
        </ul>
        <hr className="my-3" />
      </div>
    </div>
  );
}
