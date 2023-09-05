import Image from "next/image";
import { useState } from "react";

import hoticon from "@/public/home/icon/hoticon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import gerenBtn from "@/public/home/button/gernebutton.png"
import GenreSelectListModal from "./Modal/GenreSelectListModal";
import GenreList from "./GenreList";

export default function GenreListComponent() {
    const projectlist = [null, null, null, null, null];
    const [openModal, setOpenModal] = useState<boolean>(false);

    const [selectedgenre, setSelectedGenre] = useState<string[]>([]);

    return (
        <div className="bg-gray-200">
            <div className="h-24 flex justify-between">
                <div className="flex place-items-center">
                    <Image src={hoticon} alt="none" className="h-12 " />
                    <p className="my-3 bold font-['dalmoori']">장르별 프로젝트 </p>
                </div>
                <div className="gap-4">
                    <button onClick={() => setOpenModal(!openModal)}>
                        <Image className="bg-white" src={gerenBtn} alt="장르" />
                    </button>
                    <button>
                        <Image src={entirebtn} alt=" 전체보기" />
                    </button>
                </div>
            </div>
            <div className="my-16">
            </div>
            <GenreList />
            <div className="h-12">
                {openModal ? <GenreSelectListModal selectedGenre={selectedgenre} setSelectedGenre={setSelectedGenre} /> : null}
            </div>
        </div >
    )
}
