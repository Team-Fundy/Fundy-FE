
import purplebar from "@/public/home/purplebar.png"
import tempimage from "@/public/home/temp/image 16.png"
import Image from "next/image";

export default function NewProjectItem() {
    return (
        <div>
            <button className="overflow-hidden">
                <Image src={tempimage} alt="" width={280} height={300} />
                <Image src={purplebar} alt="" width={280} />
                <p className="absolute w-full font-['dalmoori']  bottom-2 inset-x-6 text-2xl text-xs text-start leading-4">
                </p>
            </button>
        </div>
    );
}
