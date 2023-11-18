import hoticon from "@/public/home/icon/hotprojectIcon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import Hotbar from "./Hotbar";
import HotProjectList from "./HotProjectList";

import Image from "next/image";

export default function HotProjectListComponent() {

    return (
        <div className="w-full bg-slate-50">
            <div className="">
                <div className="h-24 w-3/5 mx-auto">
                    <div className="flex justify-between">
                        <div className="flex my-4 gap-4">
                            <Image src={hoticon} alt="none" className="h-12" />
                            <p className="my-3 font-bold text-2xl">핫 프로젝트 리스트 </p>
                        </div>
                        <button>
                            <Image src={entirebtn} alt="전체보기" />
                        </button>
                    </div>
                </div>
                <div className="w-screen overflow-hidden">
                    <Hotbar />
                </div>
                <HotProjectList />
                <div className="h-12">
                </div>
            </div >
        </div>
    )
}
