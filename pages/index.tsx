import TextEditor from "../Components/TextEditor/TextEditor"
import LoginCompoent from "@/Components/Auth/LoginComponent"
import SignUpComponent from "@/Components/Auth/SignUpComponent"
import HomeTitleComponent from "@/Components/Home/HomeTitleComponent"
import ProjectUploadComponent from "@/Components/Home/ProjectUploadComponent"
const BannerComponent = dynamic(() => import("@/Components/Home/Banner/BannerComponent"), { ssr: false });
const HotProjectListComponent = dynamic(() => import("@/Components/Home/HotProjectList/HotProjectListComponent"), { ssr: false });
const ProjectListComponent = dynamic(() => import("@/Components/Home/ProjectList/ProjectListComponent"), { ssr: false });
const DevelopNoteComponent = dynamic(() => import("@/Components/Home/DevelopNote/DevelopNoteComponent"), { ssr: false });

import dynamic from "next/dynamic"

export default function Home() {
  return (
    <div className="bg-slate-200">
      <HomeTitleComponent />
      <HotProjectListComponent />
      <DevelopNoteComponent />
      <BannerComponent />
    </div>
  )
}
