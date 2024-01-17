import imageUploadImage from "@/public/createproject/imageUploadBtn.png";
import Image from "next/image";

interface ImageUploadButtonProps {
  onChangeFile: (file: File) => void;
  className: string;
}

export default function ImageUploadButton({
  onChangeFile,
  className,
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
    <button className={className} onClick={onClickSetCreatorProfileImageButton}>
      <Image src={imageUploadImage} alt="nll" />
    </button>
  );
}
