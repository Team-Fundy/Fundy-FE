import board from "@/public/home/board1.png"
import Image from "next/image"

export default function HotProjectItem() {
    return (
        <div className="w-64 h-96">
            <Image src={board} alt="" className="w-72 h-96" />
        </div>
    )
}
