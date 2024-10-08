import { ReactNode, useState, useRef } from "react";
import ImageUploadButton from "@/Components/Component/ImageUploadButton";
import CalendarButton from "@/Components/Component/CalendarButton";
import { RewardPackageItemType } from "../type/types";

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

interface RewardPackageAddForm {
  rewardPackage?: RewardPackageItemType;
  onClickEnrollButon: (rewardPackage: RewardPackageItemType) => void;
}

export default function RewardPackageAddForm({
  rewardPackage,
  onClickEnrollButon,
}: RewardPackageAddForm) {
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
  const [selectedItemNum, setSelectedItemNum] = useState<string[] | undefined>(
    rewardPackage?.rewardItemList
  );
  const titleInputRef = useRef(null);
  const minimumPriceInputRef = useRef(null);
  const rewardPackageImageInputRef = useRef(null);
  const numLimitRef = useRef(null);

  const [isNumable, setIsNumable] = useState(false);
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [numLimit, setNumLimit] = useState(rewardPackage?.numLimit);
  const [isShip, setIsShip] = useState(false);
  const [titleName, setTitleName] = useState("");
  const [rewardPackageImage, setRewardPackageImage] = useState(
    rewardPackage?.titleImage
  );
  const [deriveDate, setDriveDay] = useState(rewardPackage?.deriveDate);

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
        <div className="flex">
          <input
            onChange={(e) => setNumLimit(e.target.value)}
            className="my-auto h-8"
            placeholder={placeholder}
          />
          <p className="my-auto h-8">{unitWord}</p>
        </div>
      </div>
    );
  }

  function clearInput() {
    if (titleInputRef.current) titleInputRef.current.value = "";
    if (minimumPriceInputRef.current) minimumPriceInputRef.current.value = "";
    if (numLimitRef.current) numLimitRef.current.value = "";
    setSelectedItemNum([]);
    // const rewardPackageImageInputRef = useRef(null);
    setIsNumable(false);
    setMinimumPrice(0);
    setDriveDay(undefined);
    setNumLimit(undefined);
    setIsShip(false);
    setTitleName("");
    setRewardPackageImage(undefined);
  }

  return (
    <div className="w-[22.5rem] h-full my-8 text-[#777879] bg-white border-2 border-gray-300 rounded-md">
      <div className="w-[18rem] mx-auto mt-6">
        <h4 className="mb-2">리워드 이름</h4>
        <input
          ref={titleInputRef}
          onChange={(e) => setTitleName(e.target.value)}
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
            {selectedItemNum?.length}개
          </p>
          <p>의 항목이 선택되었습니다.</p>
        </div>
        <ul className="border-[0.1rem] border-gray-300 px-4 py-4">
          {temp.map((rewardItem, index) => (
            <li key={index} className="flex gap-2 my-3">
              <p className="w-1 h-1 rounded-full bg-black my-auto"></p>
              <p className="w-[7rem] text-[0.9rem] ml-1 h-6 text-ellipsis overflow-hidden ">
                {rewardItem}
              </p>
              <input
                type="checkbox"
                onChange={(event) =>
                  event.target.checked
                    ? setSelectedItemNum((items) =>
                        items ? [...items, rewardItem] : [rewardItem]
                      )
                    : setSelectedItemNum((selectedItems) =>
                        selectedItems
                          ? [
                              ...selectedItems.filter(
                                (filterItem) => filterItem !== rewardItem
                              ),
                            ]
                          : []
                      )
                }
              />
            </li>
          ))}
        </ul>
        <ul
          className={`${
            selectedItemNum?.length
              ? "px-4 py-4 border-[0.1rem] border-gray-300 "
              : ""
          } w-full my-1`}
        >
          {selectedItemNum?.map((selectedItem, index) => (
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
          {isNumable && (
            <div className="border-2 border-slate-600 h-14 flex justify-end">
              <input
                ref={numLimitRef}
                onChange={(e) => setNumLimit(parseInt(e.target.value))}
                className="my-auto text-right "
              />
              <p className="my-auto text-xl mx-2 font-semibold text-black">
                개
              </p>
            </div>
          )}
        </div>
        <div>
          <h4 className="mt-12 mb-2">예상 전달일</h4>
          <CalendarButton
            classname="w-[18rem]"
            day={deriveDate}
            onSetDay={(day) => setDriveDay(day)}
          />
        </div>
        <div>
          <div className="mt-2 flex gap-2">
            <ColorButton
              width="14"
              height="2"
              item={Number(isShip).toString()}
              condition="1"
              onClick={() => setIsShip(true)}
            >
              <p>배송</p>
            </ColorButton>
            <ColorButton
              width="14"
              height="2"
              item={Number(isShip).toString()}
              condition="0"
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
          <div className="w-full border-2 border-gray-600 my-4 h-14 flex justify-end">
            <input
              ref={minimumPriceInputRef}
              className="text-right"
              onChange={(event) =>
                setMinimumPrice(parseInt(event.target.value))
              }
            />
            <p className="my-auto text-right text-xl font-semibold text-black mx-2">
              원
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            rewardPackage
              ? (onClickEnrollButon({
                  titleName,
                  id: rewardPackage.id,
                  titleImage: rewardPackageImage,
                  deriveDate,
                  isShip,
                  numLimit,
                  minimumPrice,
                  selectedItemNum,
                }),
                clearInput())
              : null
          }
          className="w-full bg-purple-600 rounded-md h-12 my-8 text-white"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
