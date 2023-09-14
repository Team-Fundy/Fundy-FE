import hoticon from "@/public/home/icon/hoticon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import Hotbar from "./Hotbar";
import HotProjectListbar from "./HotProjectListbar";

import Image from "next/image";

export default function HotProjectListComponent() {


    return (
        <div className="bg-gray-200">
            <div className="h-24 flex justify-evenly">
                <div className="flex place-items-center">
                    <Image src={hoticon} alt="none" className="h-12 " />
                    <p className="my-3 bold font-['dalmoori']">핫 프로젝트 리스트 </p>
                </div>
                <button>
                    <Image src={entirebtn} alt="전체보기" />
                </button>
            </div>
            <div className="my-4">
                <Hotbar />
            </div>
            <div className="h-12">
            </div>
            <HotProjectListbar />
            <div className="h-12">
            </div>

        </div >
    )
}
