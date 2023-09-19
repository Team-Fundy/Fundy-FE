import Image from "next/image"
import tempbanner from "@/public/home/tempbanner.png"

export default function BannerComponent() {
    return (
        <div className="place-items-center my-16 ">
            <Image src={tempbanner} alt="" width={1330} height={400}  />
        </div>
    )
} 