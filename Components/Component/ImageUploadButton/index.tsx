import React from "react";
import imageUploadImage from "@/public/createproject/imageUploadBtn.png";
import Image from "next/image";

interface ImageUploadButtonProps {
  onChangeFile: (file: File) => void;
  imageFile?: File | null;
  className: string;
}

export default function ImageUploadButton({
  onChangeFile,
  className,
  imageFile,
}: ImageUploadButtonProps) {
  function onClickSetCreatorProfileImageButton() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/gif, image/jpeg,image/png,image/jpg";

    fileInput.onchange = (e: Event) => {
      if (!e.target) return;
      const target = e.target as HTMLInputElement;
      if (!target.files || !target.files[0]) return;

      onChangeFile(target.files[0]);
    };
    fileInput.click();
  }

  return (
    <button
      className="w-full border-[0.1rem] rounded-md border-gray-200"
      onClick={onClickSetCreatorProfileImageButton}
    >
      {imageFile ? (
        <Image
          width="1"
          height="1"
          src={URL.createObjectURL(imageFile)}
          className="w-full h-full"
          alt="Uploaded"
        />
      ) : (
        <Image className={className} src={imageUploadImage} alt="Upload" />
      )}
    </button>
  );
}
