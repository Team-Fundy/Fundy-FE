import Image from "next/image";
import { useState } from "react";

import genreIcon from "@/public/home/icon/genreIcon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import gerenBtn from "@/public/home/button/gernebutton.png"
import GenreSelectListModal from "./Modal/GenreSelectListModal";
import GenreList from "./GenreList";

export default function GenreListComponent() {
    const projectlist = [null, null, null, null, null];
    const [openModal, setOpenModal] = useState<boolean>(false);

    const [selectedgenre, setSelectedGenre] = useState<string[]>([]);

    return (
        <div className="bg-white w-full place-item-center py-12">
            <div className="w-3/5 mx-auto">
                <div className="h-18 flex justify-between mb-2">
                    <div className="flex gap-4 mt-8">
                        <Image src={genreIcon} alt="none" className="h-12 my-2" />
                        <p className="my-3 bold text-3xl font-bold">장르별 프로젝트 </p>
                    </div>
                    <div className="gap-4 flex">
                        <div className="my-8">
                            <div className="flex justify-between">
                                <button></button>
                                <button onClick={() => setOpenModal(!openModal)}>
                                    <Image className="bg-white" src={gerenBtn} alt="장르" />
                                </button>
                            </div>
                            {openModal ? <GenreSelectListModal selectedGenre={selectedgenre} setSelectedGenre={setSelectedGenre} /> : null}
                        </div>
                        <button>
                            <Image src={entirebtn} alt=" 전체보기" />
                        </button>
                    </div>
                </div>
                <div className="mt-2 mb-8 text-slate-400">
                    <p>장르별 프로젝트는 장르를 선택하여 머시깽이 하는 머시깽이 입니다.</p>
                </div>
                <GenreList />
            </div >
        </div>
    )
}
