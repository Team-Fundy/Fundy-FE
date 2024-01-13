import Image from "next/image"

import trashIcon from"@/public/createproject/icon/trashIcon.png"
import renewIcon from"@/public/createproject/icon/renewIcon.png"
import threeDotIcon from"@/public/createproject/icon/threeDotIcon.png"
import ModufyIcon from"@/public/createproject/icon/ModufyIcon.png"


type UploadImageType ={
    name : string,
    type : string,
    onClickDelete ?: () => void
}

export default function RewardItem({name, type, onClickDelete} : UploadImageType)
{
    return (
        <div className ="bg-white min-w-[36rem] w-[36rem] rounded-sm py-4 border-2 border-gray-200 flex justify-between rounded-lg">
            <div className ="flex ml-1">
                <div className ="w-1 h-1 rounded-full bg-gray-300 my-auto mx-4"/>
                <p className ="my-auto ml-1 overflow-hidden text-elipsis">{name}</p>
            </div>
            <div className ="flex gap-2 mr-2">
                <button className ="border-2 border-gray-200 bg-white flex px-4 w-fit h-fit py-1 rounded-md">
                    <Image className ="my-auto" src={renewIcon} alt="renewIcon"/>
                    변경
                </button>
                <button 
                  onClick ={onClickDelete}
                  className ="border-2 border-gray-200 bg-purple-500 text-white flex  px-4 w-fit h-fit py-1 rounded-md">
                    <Image className ="my-auto" src={trashIcon} alt="trashIcon"/>
                    삭제
                </button>
            </div>
        </div>
    )
}