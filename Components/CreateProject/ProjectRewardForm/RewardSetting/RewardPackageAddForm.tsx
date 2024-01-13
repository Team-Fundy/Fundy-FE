import { useEffect, useState } from "react"

export default function RewardPackageAddForm(){

  const temp = ['캐릭터 키링 14cm','캐릭터 일러스트 카드', '크레딧 추가', '장패드', '머시깽이','머시깽이2','캐릭터 아크릴 스탠드', '머시꺵이3','머시깽이4']
  const [selectedItemNum,setSelectedItemNum] = useState<string[]>([])

  useEffect(()=>{
    console.log(selectedItemNum)
  },[selectedItemNum])

  return (
    <div className ="w-[22.5rem] h-full my-8 bg-white border-2 border-gray-300 rounded-md">
      <div className ="w-[20rem] mx-auto ">
        <h4>리워드 이름</h4>
        <input 
          placeholder="  ex)슈퍼얼리버드"
          className="border-[0.1rem] border-gray-300 w-full h-12"/>
        <h4>리워드 프로필(선택)</h4>
        <button className ="w-full h-[4rem] bg-gray-300">
        </button>
        <h4>아이템 선택</h4>
        <div className ="flex">
          <p className ="text-purple-500 font-semibold">{selectedItemNum.length}개</p>
          <p>의 항목이 선택되었습니다.</p>
        </div>
        <ul className ="border-[0.1rem] border-gray-300 px-4">
          {
            temp.map((rewardItem, index)=>(
              <li key = {index + 1} className ="flex gap-2 my-3">
                <p className ="w-1 h-1 rounded-full bg-black my-auto"></p>
                <p className ="w-[7rem] text-[0.9rem] ml-1 h-6 text-ellipsis overflow-hidden ">{rewardItem}</p>
                <input 
                  type="checkbox"
                  onChange={(event)=> event.target.checked ? setSelectedItemNum((items)=>[...items,rewardItem]) :  setSelectedItemNum((selectedItems)=>[...selectedItems.filter((filterItem)=>filterItem !== rewardItem)])}/>
              </li>
            ))
          }
          </ul>
           <ul className ={`${selectedItemNum.length ? 'px-4 py-4 border-[0.1rem] border-gray-300 ' : ''} w-full my-1`}>
            {
              selectedItemNum.map((selectedItem,index)=>(
                <li className ="flex gap-2 my-1" key={'s'+index}>
                  <p className ="w-1 h-1 rounded-full bg-black my-auto"></p>
                  <p className ="w-[10rem] text-[0.9rem] ml-1 h-6 text-ellipsis overflow-hidden">{selectedItem}</p>
                </li>
              ))
            }
           </ul>
           <div>
            <h4 className ="mt-12">수량 제한</h4>
              <div className ="flex">
                <button>있음</button>
                <button>없음</button>
              </div>
              <input className ="w-full"/>
           </div>
           <div>
              <h4 className ="mt-12">예상 전달일</h4>
              <button>날짜고르는거</button>
           </div>
           <div>
              <div className ="flex">
                <button>배송</button>
                <button>배송 없음</button>
              </div>
           </div>
           <div>
              <h4 className ="mt-12">최소 후원 금액</h4>
              <p className ="my-1">배송이 있는 경우, 배송비를 포함하여 적어주세요.</p>
              <input/>
           </div>
      </div>
    </div>
  )
}