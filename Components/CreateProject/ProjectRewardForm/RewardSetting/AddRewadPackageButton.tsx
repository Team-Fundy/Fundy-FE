import Image from "next/image";
import addRewardButton from "@/public/createproject/addRewardButton.png";

interface AddRewwardPakcageButtonProps {
  onClickBtn: () => void;
}

export default function AddRewwardPakcageButton({
  onClickBtn,
}: AddRewwardPakcageButtonProps) {
  return (
    <button onClick={onClickBtn}>
      <Image src={addRewardButton} alt="addbuton" />
    </button>
  );
}
