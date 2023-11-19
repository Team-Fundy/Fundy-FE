import Image from "next/image";
import { useState } from "react";

import genreIcon from "@/public/home/icon/genreIcon.png"
import entirebtn from "@/public/home/button/entirebutton2.png"
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
                <div className="flex gap-4">
                    <Image src={genreIcon} alt="none" className="h-10 my-2" />
                    <p className="my-auto bold text-xl font-bold">장르별 프로젝트 </p>
                </div>
                <button className="h-4 my-auto">
                    <Image src={entirebtn} alt="전체보기" className ="w-20 h-6" />
                </button>
            </div>
            <div className="mb-6 text-[0.6rem] text-slate-400">
                <p>장르별 프로젝트는 장르를 선택하여 머시깽이 하는 머시깽이 입니다.</p>
            </div>
                <GenreList />
            </div >
        </div>
    )
}
