import { useState } from "react";

import SelectProjectTypeComponent from "@/Components/CreateProject/SelectTypeComponent";
import CreateNoticeComponent from "@/Components/CreateProject/CreateNoticeComponent";
import CreateProjectFormComponent from "@/Components/CreateProject/CreateProjectFormComponent";
import CreateProjectSidebar from "@/Components/CreateProject/CreateProjectSidebar";
import FundingScheduleForm from "@/Components/CreateProject/FundingScheduleForm/FundingScheduleForm";
import ProjectDetailForm from "@/Components/CreateProject/ProjectDetailForm/ProjectDetailForm";
import DevelopNotePriodForm from "@/Components/CreateProject/DevelopNotePriodForm/DevelopNotePriodForm";
import ProjectRewarodForm from "@/Components/CreateProject/ProjectRewardForm";

export default function CreateProject() {
  const [stage, setStage] = useState("createNot3ice");
  return (
    <div className="h-100 bg-gray-100">
      {stage === "selectProjectType" && <SelectProjectTypeComponent />}
      {stage === "createNotice" && <CreateNoticeComponent />}
      {!(stage === "selectProjectType" || stage === "createNotice") && (
        <div className="flex h-full bg-gray-100">
          <CreateProjectSidebar />
          <CreateProjectFormComponent />
        </div>
      )}
    </div>
  );
}
