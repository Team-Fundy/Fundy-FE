import TextEditor from "../Components/TextEditor/TextEditor"
import LoginCompoent from "@/Components/Auth/LoginComponent"
import SignUpComponent from "@/Components/Auth/SignUpComponent"
import HomeTitleComponent from "@/Components/Home/HomeTitle/HomeTitleComponent"
import ProjectUploadComponent from "@/Components/Home/ProjectUploadComponent"
import GenreSelectListModal from "@/Components/Home/GenreList/Modal/GenreSelectListModal"


import Image from "next/image"
import dotline from "@/public/home/dotline.png"

const BannerComponent = dynamic(() => import("@/Components/Home/Banner/BannerComponent"), { ssr: false });
const HotProjectListComponent = dynamic(() => import("@/Components/Home/HotProjectList/HotProjectListComponent"), { ssr: false });
const ProjectListComponent = dynamic(() => import("@/Components/Home/ProjectList/ProjectListComponent"), { ssr: false });
const DevelopNoteComponent = dynamic(() => import("@/Components/Home/DevelopNote/DevelopNoteComponent"), { ssr: false });
const NewProjectListComponent = dynamic(() => import("@/Components/Home/NewProject/NewProjectComponent"), { ssr: false });
const GenreListComponent = dynamic(() => import("@/Components/Home/GenreList/GenreListComponent"), { ssr: false });

import dynamic from "next/dynamic"

export default function Home() {

  function Dotline() {
    return <Image className="my-4 place-content-center" alt="" src={dotline} />

  }

  return (
    <div className="bg-slate-200">
      <HomeTitleComponent />
      <HotProjectListComponent />
      <Dotline />
      <DevelopNoteComponent />
      <BannerComponent />
      <NewProjectListComponent />
      <Dotline />
      <GenreListComponent />
    </div>
  )
}
