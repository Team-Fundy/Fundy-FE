import Image from "next/image"
import { useState } from "react"

import imageUploadButton from "@/public/createproject/imageUploadBtn.png"
import videoUploadButton from "@/public/createproject/videoUploadBtn.png"
import UploadItem from "./UploadItem";


type UploadImageType = {
    name : string,
    file?: string,
    type : 'Video' | 'Image'
}

type UploadImageList = {
    imageList: Array<UploadImageType>;
    setImageList: React.Dispatch<React.SetStateAction<Array<UploadImageType>>>;
}



export default function UploadImageList({imageList, setImageList} :UploadImageList ){
    
    const [isVideoInputModalOpen, setIsVideoInputModalOpen] = useState(false);
    const [videoLink,setVidoeLink] = useState(""); 

    function onClickAddImageBtn()
    {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/gif, image/jpeg,image/png,image/jpg';
        
        fileInput.onchange = (e) => {
            setImageList((item)=> [...item,{file : URL.createObjectURL(e.target.files[0]), name : e.target.files[0].name , type : "Image"}]);
        };
        fileInput.click();
    }

    function onClickEnterVideoBtn(event : InputEvent)
    {
        console.log(event)
        setImageList((item)=> [...item,{name : videoLink  , type : "Image"}]);
        setIsVideoInputModalOpen(false);
    }

    return (
    <div className ="relative"> 
        <h2 className ="font-semibold text-lg my-2">작품 설명 이미지&영상</h2>
        <p className ="my-2 text-gray-600">펀더들이 한눈 프로젝트의 느낌을 알 수 있도록 메인 이미지를 업로드 해주세요.</p>
        <div className ="flex gap-2">
            <button
                className ="bg-white px-24 py-16  hover:scale-105" 
                onClick={onClickAddImageBtn}>
                <Image src={imageUploadButton} alt="nll"/>
            </button>
            <button
                className ="bg-white px-12 py-16  hover:scale-105" 
                onClick={()=>setIsVideoInputModalOpen(true)}>
                <Image src={videoUploadButton} alt="nll"/>
            </button>
        </div>
        <div>
            {
                imageList.length > 0 ? 
                    imageList.map((item,index)=>(
                        <UploadItem key = {index}
                                    name={item.name}
                                    file ={item.file} 
                                    onClickDelete ={(file : string)=>(setImageList(imageList.filter((item)=> item.file!==file)))} 
                                    type ={item.type}/>
                    ))
                    : null
            }
        </div>
        {
            isVideoInputModalOpen ?
        <div className ="fixed left-1/2 bottom-1/2 w-72 h-36 white z-50 bg-white border-2 border-slate-300 ">
            <p className ="my-3 mx-auto w-fit font-semibold">동영상 UML 링크를 입력해주세요 </p>
            <input className ="border-2 w-60 mx-auto my-1 border-slate-200 ml-6" onChange={(e)=>setVidoeLink(e.target.value)}/>
            <div className ="mx-auto w-fit flex gap-6 my-2">
                <button className ="border-[0.1rem] border-black px-2" onClick ={(e)=>onClickEnterVideoBtn(e)}>확인</button>
                <button className ="border-[0.1rem] border-black px-2" onClick ={()=>setIsVideoInputModalOpen(false)}>취소</button>
            </div>
        </div>
            : null
        }
    </div>
    )
}