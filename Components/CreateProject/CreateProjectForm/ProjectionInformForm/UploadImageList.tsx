import Image from "next/image"
import { useState } from "react"

import imageUploadButton from "@/public/createproject/imageUploadBtn.png"
import videoUploadButton from "@/public/createproject/videoUploadBtn.png"
import UploadItem from "./UploadItem";


type UploadImageType ={
    name : string,
    file : string
}

type UploadImageList = {
    imageList: Array<UploadImageType>;
    setImageList: React.Dispatch<React.SetStateAction<Array<UploadImageType>>>;
}



export default function UploadImageList({imageList, setImageList} :UploadImageList ){
    //const []

    function onClickAddImageBtn()
    {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/gif, image/jpeg,image/png,image/jpg';
        
        fileInput.onchange = (e) => {
            setImageList((item)=> [...item,{file : URL.createObjectURL(e.target.files[0]), name : e.target.files[0].name} ]);
        };
        fileInput.click();
    }

    return (
    <div> 
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
                onClick={onClickAddImageBtn}>
                <Image src={videoUploadButton} alt="nll"/>
            </button>
        </div>
        <div>
            {
                imageList.length > 0 ? 
                    imageList.map((item,index)=>(
                        <UploadItem key = {index} name={item.name} file ={item.file} onClickDelete ={(file : string)=>(setImageList(imageList.filter((item)=> item.file!==file)))} />
                    ))
                    : null
            }
        </div>

        
    </div>
    )
}