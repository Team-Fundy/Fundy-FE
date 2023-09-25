import Image from "next/image"
import temp from "@/public/home/temp/Frame 1145.png"

export default function UserMyPageProjectItem() {

    const genre = "RPG | 농업 및 제작";
    const title = "LEGEND OF PINKLE";
    return (
        <div>
            <Image src={temp} alt="" className="w-64 h-48 my-2" />
            <p className="text-gray-300 py-1">{genre}</p>
            <p className="font-xl text-gray-500 font-bold">{title}</p>
        </div >
    )
}