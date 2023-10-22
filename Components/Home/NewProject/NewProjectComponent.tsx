import newprojecticon from "@/public/home/icon/newprojectIcon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import NewProjectList from "./NewProjectList";
import Image from "next/image";

export default function NewProjectListComponent() {
    const projectlist = [null, null, null, null, null];
    return (
        <div className="bg-gray-200">
            <div className="h-18 flex justify-between mb-2">
                <div className="flex gap-4">
                    <Image src={newprojecticon} alt="none" className="h-12 my-2" />
                    <p className="my-3 bold text-3xl font-bold">신규프로젝트 </p>
                </div>
                <button className="h-4">
                    <Image src={entirebtn} alt="전체보기" />
                </button>
            </div>
            <div className="mb-6 text-slate-400">
                <p>장르별 프로젝트는 장르를 선택하여 머시깽이 하는 머시깽이 입니다.</p>
            </div>
            <NewProjectList />
            <div className="h-12">
            </div>

        </div >
    )
}
