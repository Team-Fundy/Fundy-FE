import SelectProjectTypeComponent from "@/Components/CreateProject/SelectTypeComponent"
import CreateNoticeComponent from "@/Components/CreateProject/CreateNoticeComponent"
import CreateProjectFormComponent from "@/Components/CreateProject/CreateProjectFormComponent"
import CreateProjectSidebar from "@/Components/CreateProject/CreateProjectSidebar"
import FundingScheduleForm from "@/Components/CreateProject/FundingScheduleForm/FundingScheduleForm"
import ProjectDetailForm from "@/Components/CreateProject/ProjectDetailForm/ProjectDetailForm"
import ProjectRewardForm from "@/Components/CreateProject/ProjectRewardForm/ProjectRewardForm"
import DevelopNotePriodForm from "@/Components/CreateProject/DevelopNotePriodForm/DevelopNotePriodForm"

export default function CreateProject() {
  return (
    <div className ="flex bg-slate-100"> 
        <CreateProjectSidebar/>
        <DevelopNotePriodForm/>
    </div>
  )
}
