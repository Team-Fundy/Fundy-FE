import hoticon from "@/public/home/icon/hoticon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import Image from "next/image";
import Hotbar from "./hotbar";
import HotProjectListbar from "./HotProjectListbar";

/* <button className="w-24 border-2 border-black bg-white font-['dalmoori'] text-sm">
전체보기
</button> */

export default function HotProjectListComponent() {
    const projectlist = [null, null, null, null, null];
    return (
        <div className="bg-gray-200">
            <div className="h-24 flex justify-between">
                <div className="flex place-items-center">
                    <Image src={hoticon} alt="none" className="h-12 " />
                    <p className="my-3 bold font-['dalmoori']">핫 프로젝트 리스트 </p>
                </div>
                <button>
                    <Image src={entirebtn} alt="전체보기" />
                </button>
            </div>
            <div className="my-16">
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
