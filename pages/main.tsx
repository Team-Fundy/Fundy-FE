import HomeTitleComponent from "@/Components/Home/HomeTitleComponent"
import HotProjectListComponent from "@/Components/Home/HotProjectList/HotProjectListComponent"
import ProjectListComponent from "@/Components/Home/ProjectList/ProjectListComponent"
import PopularListComponent from "@/Components/Home/PopularListComponent"

export default function Home() {
    return (
        <div className="bg-slate-100">
            <HomeTitleComponent />
            <div className="flex">
                <HotProjectListComponent />
                <PopularListComponent />
            </div>
            <ProjectListComponent />
        </div>
    )
}
