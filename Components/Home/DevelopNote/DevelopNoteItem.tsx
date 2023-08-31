import board from "@/public/home/developnote-title-bg.png";
import Image from "next/image";

export default function DevelopNoteItem() {
    return (
        <div>
            <button className=" w-64 relative overflow-hidden">
                <Image src={board} alt="" className="w-full h-full object-cover" />
                <p className="absolute w-full font-['dalmoori']  bottom-2 inset-x-6 text-2xl text-xs text-start leading-4">
                </p>
            </button>
        </div>
    );
}
