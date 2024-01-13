import { useState } from "react"

interface RewardItemAddFormProps {
  onAddItem : (itemName : string, selectedItemCondition : string)=> void
}

export default function RewardItemAddForm({onAddItem} : RewardItemAddFormProps) {

  const [itemName,setItemName] = useState('')
  const [selectedItemCondition,setSelectedItemCondition] = useState('')
  
  const typeSelections = ['옵션없음','선택(직관)','직접(주관)']

  const onClickAddItemButton = () =>{
    if (!itemName.length || !selectedItemCondition.length)
      return ;
    setItemName('');
    setSelectedItemCondition('')
    onAddItem(itemName,selectedItemCondition)
  }

  return (
    <div className ="w-[22.5rem] h-[40rem] mb-4 rounded-md border-[0.15rem] border-gray-300 bg-white text-gray-400 flex flex-col justify-between">
      <div className="w-[19.5rem] mx-auto">
        <h3 className ="text-gray-500 mt-8">아이템 이름</h3>
        <input
          onChange={(event)=>setItemName(event.target.value)}
          className ="border-2 border-slate-100 rounded-md px-2 my-2 h-14 w-full"
          placeholder ="  ex) 크레딧 추가"/>
        <h4 className ="mt-8 mb-2">옵션 조건</h4>
        <div className ="flex gap-4 justify-center">
          {
            typeSelections.map((item : string)=>(
              <button
                onClick ={()=>setSelectedItemCondition(item)}
                className ={`w-24 text-[0.95rem] py-2 border-[0.12rem] rounded-md ${item === selectedItemCondition ? 'border-purple-700 text-gray-500' : 'border-gray-300'}`}>
                {item}
              </button>
            ))
          }
        </div>
      </div>
      <button 
        onClick={onClickAddItemButton}
        className={`border-[0.1rem] rounded-md mx-auto my-6 w-[19.5rem] h-12 ${itemName.length &&  selectedItemCondition.length ? 'bg-purple-500 text-white': 'bg-gray-200'}`}>
          추가하기
      </button>
    </div>
  )
}