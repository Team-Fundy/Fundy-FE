import RewardItem from "./RewardItem";
import RewardItemAddForm from "./RewardItemAddForm";

export default function RewardItemSetting() {

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