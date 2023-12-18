import SelectProjectTypeComponent from "@/Components/CreateProject/SelectTypeComponent"
import CreateNoticeComponent from "@/Components/CreateProject/CreateNoticeComponent"
import CreateProjectFormComponent from "@/Components/CreateProject/CreateProjectFormComponent"
import CreateProjectSidebar from "@/Components/CreateProject/CreateProjectSidebar"

export default function CreateProject() {
  return (
    <div className ="flex bg-slate-100"> 
        <CreateProjectSidebar/>
        <CreateProjectFormComponent/>
    </div>
  )
}
