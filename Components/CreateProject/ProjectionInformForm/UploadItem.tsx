import Image from "next/image"

import trashIcon from"@/public/createproject/icon/trashIcon.png"
import renewIcon from"@/public/createproject/icon/renewIcon.png"
import threeDotIcon from"@/public/createproject/icon/threeDotIcon.png"
import ModufyIcon from"@/public/createproject/icon/ModufyIcon.png"


type UploadImageType ={
    name : string,
    file?: string,
    type : string,
    onClickDelete : (file : string) => void
}

export default function UploadItem({name, file, type, onClickDelete} : UploadImageType)
{
    return (
        <div className ="bg-white rounded-sm py-4 border-2 border-gray-200 flex justify-between rounded-lg my-4">
            <div className ="flex ml-1">
                <Image src={threeDotIcon} alt="threedot"/> 
                 { type === 'Image' && file  ? <Image src={file} alt="fileimg" className="w-8 h-10" width={20} height={15}/> : null}
                <Image src={ModufyIcon} alt="ModufyIcon"/>
                <p className ="my-auto ml-1 overflow-hidden text-elipsis">{name}</p>
            </div>
            <div className ="flex gap-2 mr-2">
                <button className ="border-2 border-gray-200 bg-white flex px-4 w-fit h-fit py-1 rounded-md">
                    <Image className ="my-auto" src={renewIcon} alt="renewIcon"/>
                    변경
                </button>
                <button className ="border-2 border-gray-200 bg-purple-500 text-white flex  px-4 w-fit h-fit py-1 rounded-md" onClick={()=>onClickDelete(file)}>
                    <Image className ="my-auto" src={trashIcon} alt="trashIcon"/>
                    삭제
                </button>
            </div>
        </div>
    )
}