import devnoteboard from "@/public/developnote/devnotboard.png";
import Image, { StaticImageData } from "next/image";

type AddExpectedDevNoteItemProps = {
  spotlight: boolean;
};

export default function AddExpectedDevNoteItem({
  spotlight,
}: AddExpectedDevNoteItemProps) {
  return (
    <div
      className={`relative z-3 shrink-0;
      ${spotlight ? "grayscale-0 scale-100" : "grayscale scale-90"}`}
    >
      <Image src={devnoteboard} alt="" className="w-[13.3rem] h-[17rem]" />
      <div className="absolute top-[3rem] left-[2.85rem] z-4 bottom-[14rem]  ">
        <span className="w-[9.3rem] h-[12.2rem] border-[0.4rem] border-white" />
      </div>
    </div>
  );
}
