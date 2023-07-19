import TextEditor from "../Components/TextEditor/TextEditor"
import LoginCompoent from "@/Components/Auth/LoginComponent"
import SignUpComponent from "@/Components/Auth/SignUpComponent"
import HomeTitleComponent from "@/Components/Home/HomeTitleComponent"
import ProjectUploadComponent from "@/Components/Home/ProjectUploadComponent"
import HotProjectListComponent from "@/Components/Home/HotProjectListComponent"
import ProjectListComponent from "@/Components/Home/ProjectListComponent"
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
