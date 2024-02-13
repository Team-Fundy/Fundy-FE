import devnoteboard from "@/public/developnote/devnotboard.png";
import Image, { StaticImageData } from "next/image";

type DevNoteItem = {
  img: StaticImageData;
  spotlight: boolean;
  day: string;
};

export default function DevNoteItem({ img, spotlight, day }: DevNoteItem) {
  return (
    <button>
      <div
        className={`relative z-3 ${
          spotlight ? "grayscale-0 scale-100" : "grayscale scale-90"
        }`}
      >
        <Image src={devnoteboard} alt="" className="w-[12rem] h-[18rem]" />
        <div className="relative z-4 bottom-[14rem] left-10 ">
          <Image
            src={img}
            alt=""
            className="w-[8rem] h-[10rem] border-[0.6rem] border-white"
          />
        </div>
      </div>
    </button>
  );
}
