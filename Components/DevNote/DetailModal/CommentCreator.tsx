import Image from "next/image";
import peopleIcon from "@/public/developnote/peopleIcon.png";

export default function CommentCreator() {
  return (
    <div className="flex h-[8rem] my-auto gap-10 px-16 bg-[#232426]">
      <Image
        className="w-[4rem] h-[4rem] my-auto"
        src={peopleIcon}
        alt="peopleIcon"
      />
      <input className="border-[0.1rem] w-[50rem] py-2 text-white ml-2 h-12 my-auto border-white rounded-md  bg-[#232426]" />
    </div>
  );
}
