import hoticon from "@/public/home/icon/hoticon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import gerenBtn from "@/public/home/button/gernebutton.png"
import GenreList from "./GenreList";
import Image from "next/image";

export default function GenreListComponent() {
    const projectlist = [null, null, null, null, null];
    return (
        <div className="bg-gray-200">
            <div className="h-24 flex justify-between">
                <div className="flex place-items-center">
                    <Image src={hoticon} alt="none" className="h-12 " />
                    <p className="my-3 bold font-['dalmoori']">장르별 프로젝트 </p>
                </div>
                <div className="gap-4">
                    <button>
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
            </div>

        </div >
    )
}
