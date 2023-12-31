import temp from "@/public/home/temp/image 18 (1).png"
import Image from "next/image"
import { useState } from "react"
import DevNoteItem from "@/Components/DevNote/DevNoteItem"
import devnameboard from "@/public/developnote/devnotedayboard.png"

const Kor = ["첫", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "열한", "열두"];

export default function DevNoteList() {

    const [nowPage, setNowPage] = useState<number>(1);
    return (
        <div className="w-screen">
            <div className="mx-auto">
                <div className="relative z-4">
                    <Image src={devnameboard} alt="" />
                    <p className="relative z-5 bottom-10 left-24 text-2xl font-bold">{Kor[nowPage - 1]}번째 개발노트</p>
                </div>
                <div className="flex gap-12 ">
                    <DevNoteItem img={temp} day="2023. 04. 08" />
                    <DevNoteItem img={temp} day="2023. 04. 08" />
                    <DevNoteItem img={temp} day="2023. 04. 08" />
                    <DevNoteItem img={temp} day="2023. 04. 08" />
                    <DevNoteItem img={temp} day="2023. 04. 08" />
                </div>

            </div>
        </div >
    );
}