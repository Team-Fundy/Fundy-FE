import { ReactNode, useState } from "react";
import Image from "next/image";
import ImageUploadButton from "@/Components/Component/ImageUploadButton";
import onGetImageFile from "@/Components/Component/onGetImageFile";
import CalendarButton from "@/Components/Component/CalendarButton";

interface ColorButtonProps {
  item: string;
  condition: string;
  onClick: () => void;
  children: ReactNode;
  width: string;
  height: string;
}

interface InputBoxProps {
  placeholder: string;
  unitWord: string;
}

export default function RewardPackageAddForm() {
  const temp = [
    "캐릭터 키링 14cm",
    "캐릭터 일러스트 카드",
    "크레딧 추가",
    "장패드",
    "머시깽이",
    "머시깽이2",
    "캐릭터 아크릴 스탠드",
    "머시꺵이3",
    "머시깽이4",
  ];
  const [selectedItemNum, setSelectedItemNum] = useState<string[]>([]);
  const [isNumable, setIsNumable] = useState(false);
  const [isShip, setIsShip] = useState(false);
  const [rewardPackageImage, setRewardPackageImage] = useState<File>();
  const [driveDay, setDriveDay] = useState<Date | null>();

  function ColorButton({
    width,
    height,
    item,
    condition,
    children,
    onClick,
  }: ColorButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`w-[${width}rem] h-[${height}rem] text-[0.95rem] py-2 border-[0.12rem] rounded-md ${
          item === condition
            ? "border-purple-700 text-gray-500"
            : "border-gray-300"
        }`}
      >
        {children}
      </button>
    );
  }

  function InputBox({ placeholder, unitWord }: InputBoxProps) {
    return (
      <div className="border-2 border-slate-600 h-14">
        <div className="flex justify-">
          <input className="my-auto h-8" placeholder={placeholder}></input>
          <p className="my-auto h-8">{unitWord}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[22.5rem] h-full my-8 text-[#777879] bg-white border-2 border-gray-300 rounded-md">
      <div className="w-[18rem] mx-auto mt-6">
        <h4 className="mb-2">리워드 이름</h4>
        <input
          placeholder="  ex)슈퍼얼리버드"
          className="border-[0.1rem] border-gray-300 w-full h-12 mb-8"
        />
        <h4 className="mb-4">리워드 프로필(선택)</h4>
        <ImageUploadButton
          imageFile={rewardPackageImage}
          className="w-[8rem] h-[8rem] mx-auto mb-8 my-8"
          onChangeFile={(newImage) => setRewardPackageImage(newImage)}
        />
        <h4 className="mt-8">아이템 선택</h4>
        <div className="flex mb-2">
          <p className="text-purple-500 font-semibold">
            {selectedItemNum.length}개
          </p>
          <p>의 항목이 선택되었습니다.</p>
        </div>
        <ul className="border-[0.1rem] border-gray-300 px-4 py-4">
          {temp.map((rewardItem, index) => (
            <li key={index + 1} className="flex gap-2 my-3">
              <p className="w-1 h-1 rounded-full bg-black my-auto"></p>
              <p className="w-[7rem] text-[0.9rem] ml-1 h-6 text-ellipsis overflow-hidden ">
                {rewardItem}
              </p>
              <input
                type="checkbox"
                onChange={(event) =>
                  event.target.checked
                    ? setSelectedItemNum((items) => [...items, rewardItem])
                    : setSelectedItemNum((selectedItems) => [
                        ...selectedItems.filter(
                          (filterItem) => filterItem !== rewardItem
                        ),
                      ])
                }
              />
            </li>
          ))}
        </ul>
        <ul
          className={`${
            selectedItemNum.length
              ? "px-4 py-4 border-[0.1rem] border-gray-300 "
              : ""
          } w-full my-1`}
        >
          {selectedItemNum.map((selectedItem, index) => (
            <li className="flex gap-2 my-1" key={"s" + index}>
              <p className="w-1 h-1 rounded-full bg-black my-auto"></p>
              <p className="w-[10rem] text-[0.9rem] ml-1 h-6 text-ellipsis overflow-hidden">
                {selectedItem}
              </p>
            </li>
          ))}
        </ul>
        <div>
          <h4 className="mt-12">수량 제한</h4>
          <div className="flex gap-2 mb-4">
            <ColorButton
              width="14"
              height="2"
              item={Number(isNumable).toString()}
              condition="0"
              onClick={() => setIsNumable(false)}
            >
              <p>없음</p>
            </ColorButton>
            <ColorButton
              width="14"
              height="2"
              item={Number(isNumable).toString()}
              condition="1"
              onClick={() => setIsNumable(true)}
            >
              <p>있음</p>
            </ColorButton>
          </div>
          <InputBox placeholder="개수를 입력해주세요." unitWord="개" />
        </div>
        <div>
          <h4 className="mt-12 mb-2">예상 전달일</h4>
          <CalendarButton
            classname="w-[18rem]"
            day={driveDay}
            onSetDay={(day) => setDriveDay(day)}
          />
        </div>
        <div>
          <div className="mt-2 flex gap-2">
            <ColorButton
              width="14"
              height="2"
              item={Number(isShip).toString()}
              condition="0"
              onClick={() => setIsShip(true)}
            >
              <p>배송</p>
            </ColorButton>
            <ColorButton
              width="14"
              height="2"
              item={Number(isShip).toString()}
              condition="1"
              onClick={() => setIsShip(false)}
            >
              <p>배송 없음</p>
            </ColorButton>
          </div>
        </div>
        <div>
          <h4 className="mt-12">최소 후원 금액</h4>
          <p className="my-1">
            배송이 있는 경우, 배송비를 포함하여 적어주세요.
          </p>
          <input className="w-full border-2 border-gray-600 my-4 h-14" />
        </div>
        <button className="w-full bg-purple-600 rounded-md h-12 my-8 text-white">
          저장하기
        </button>
      </div>
    </div>
  );
}
