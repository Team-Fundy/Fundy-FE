import HomeTitleComponent from "@/Components/Home/HomeTitle/HomeTitleComponent"

import Image from "next/image"
import dotline from "@/public/home/dotline.png"

const BannerComponent = dynamic(() => import("@/Components/Home/Banner/BannerComponent"), { ssr: false });
const HotProjectListComponent = dynamic(() => import("@/Components/Home/HotProjectList/HotProjectListComponent"), { ssr: false });
const DevelopNoteComponent = dynamic(() => import("@/Components/Home/DevelopNote/DevelopNoteComponent"), { ssr: false });
const NewProjectListComponent = dynamic(() => import("@/Components/Home/NewProject/NewProjectComponent"), { ssr: false });
const GenreListComponent = dynamic(() => import("@/Components/Home/GenreList/GenreListComponent"), { ssr: false });

import dynamic from "next/dynamic"

export default function Home() {

  function Dotline() {
    return <Image className="my-4 place-content-center" alt="" src={dotline} />

  }

  return (
    <div className="bg-slate-200 grid place-items-center">
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
