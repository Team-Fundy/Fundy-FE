import Image from "next/image"
import hometitleImage from "@/public/home/hometitle.png"
{/* <div>
<p>던전트릭</p>
</div>
<div className="relative z-10">
<EntireBar />
<NowBar />
</div> */}

export default function HomeTitleComponent() {


    function EntireBar() {
        return <div className="w-64 h-4 bg-cyan-950"></div>
    }
    function NowBar() {
        return <div className="w-24 h-4 bg-white"></div>
    }
    return (
        <div className="w-full">
            <Image src={hometitleImage} alt="" priority />



        </div>
    )
} 