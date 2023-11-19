import Image, { StaticImageData } from "next/image"

type hometitleitemtype = {
    titleimg: StaticImageData,
    title: string,
    subtitle: string,
}

export default function HomeTitleItem({ titleimg, title, subtitle }: hometitleitemtype) {
    return (
        <div className="relative w-full">
            <Image className="w-full" src={titleimg} alt="" priority />
            <div className="absolute z-10 text-white bottom-40 w-full px-4">
                <div className ="w-3/5 mx-auto">
                    <p className="font-bold text-3xl mx-1 my-2">{title}</p>
                    <p className="w-[27rem] text-sm opacity-60"> {subtitle}</p>
                </div>
            </div>
        </div>
    )
}