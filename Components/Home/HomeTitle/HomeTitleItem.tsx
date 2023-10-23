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
            <div className="absolute z-10 text-white left-72 bottom-40 px-4">
                <p className="font-bold my-8 text-4xl">{title}</p>
                <p className="w-[24rem] opacity-60"> {subtitle}</p>
            </div>
        </div>
    )
}