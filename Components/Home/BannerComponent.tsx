import Image from "next/image"
import tempbanner from "@/public/home/tempbanner.png"

export default function BannerComponent() {
    return (
        <div className="place-items-center my-4 ">
            <Image src={tempbanner} alt="" />
        </div>
    )
} 