import newprojecticon from "@/public/home/icon/newprojectIcon.png"
import entirebtn from "@/public/home/button/entirebutton.png"
import NewProjectList from "./NewProjectList";
import Image from "next/image";

export default function NewProjectListComponent() {
    const projectlist = [null, null, null, null, null];
    return (
        <div className="bg-gray-200">
            <div className="h-24 flex justify-between">
                <div className="flex place-items-center">
                    <Image src={newprojecticon} alt="none" className="h-12 " />
                    <p className="my-3 bold font-['dalmoori']">신규프로젝트 </p>
                </div>
                <button>
                    <Image src={entirebtn} alt="전체보기" />
                </button>
            </div>
            <div className="my-16">
            </div>
            <NewProjectList />
            <div className="h-12">
            </div>

        </div >
    )
}
