import devnoteboard from "@/public/developnote/devnotboard.png"
import Image, { StaticImageData } from "next/image"

type DevNoteItem = {
    img: StaticImageData,
    day: string,
}

export default function DevNoteItem({ img, day }: DevNoteItem) {
    return (
        <div>
            <div className="relative z-3">
                <Image src={devnoteboard} alt="" className="w-[16rem] h-[24rem]" />
                <div className="relative z-4 bottom-[20rem] left-12 ">
                    <Image src={img} alt="" className="w-44 h-60 border-[1rem] border-white" />
                    <p className="font-sm px-10 my-4">{day}</p>
                </div>
            </div>
        </div >
    )
}