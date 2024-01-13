import RewardItem from "./RewardItem";
import RewardItemAddForm from "./RewardItemAddForm";
import { useState } from "react";

interface RewardItemType {
  name : string,
  option : string
}

export default function RewardItemSetting() {
  
  const [rewardItemList,setRewardItemList] = useState<RewardItemType[]>([])
  
  function addRewardItem(itemName : string, selectedItemCondition : string) 
  {
    setRewardItemList((items : RewardItemType[])=>[...items,{name : itemName, option : selectedItemCondition}])
  }

  return (
    <div className ="flex gap-4">
      <RewardItemAddForm onAddItem={addRewardItem}/>
       <div>
        {rewardItemList.map((rewardItem, index) => (
               <RewardItem type = {rewardItem.option} name = {rewardItem.name} key={index}/>
           ))}
       </div>
    </div>
  )
}