
import purplebar from "@/public/home/purplebar.png"
import tempimage from "@/public/home/temp/image 16.png"
import Image from "next/image";

export default function NewProjectItem() {
    return (
        <div>
            <button className="overflow-hidden">
                <Image className="" src={tempimage} alt="" width="300" height="340" style={{ width: "auto", height: "auto" }} />
                <Image src={purplebar} alt="" width="300" height="100" style={{ width: "auto", height: "auto" }} />
                <p className="absolute w-full font-['dalmoori']  bottom-2 inset-x-6 text-2xl text-xs text-start leading-4">
                </p>
            </button>
        </div>
    );
}
