import RewardItem from "./RewardItem";
import RewardItemAddForm from "./RewardItemAddForm";
import { useState } from "react";

export default function RewardItemSetting() {
  
  const [rewardItem,setRewardItem] = useState()

  return (
    <div className ="flex gap-4">
      <RewardItemAddForm />
       <div>
           <RewardItem type = "Video" name ="1"/>
           <RewardItem type = "Video" name ="1"/>
       </div>
    </div>
  )
}