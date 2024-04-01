import { useState, useEffect } from "react";

import SelectProjectTypeComponent from "@/Components/CreateProject/SelectTypeComponent";
import CreateNoticeComponent from "@/Components/CreateProject/CreateNoticeComponent";
import CreateProjectFormComponent from "@/Components/CreateProject/CreateProjectFormComponent";
import CreateProjectSidebar from "@/Components/CreateProject/CreateProjectSidebar";
import FundingScheduleForm from "@/Components/CreateProject/FundingScheduleForm/FundingScheduleForm";
import ProjectDetailForm from "@/Components/CreateProject/ProjectDetailForm/ProjectDetailForm";
import DevelopNotePriodForm from "@/Components/CreateProject/DevelopNotePriodForm/DevelopNotePriodForm";
import ProjectRewarodForm from "@/Components/CreateProject/ProjectRewardForm";
import CreatorInformFrom from "@/Components/CreateProject/CreatorProjectForm/CreatorInformFrom";

import { useCreateProjectStore } from "@/store/createProjectStore";

const stage = [
  "크리에이터 정보 작성",
  "프로젝트 정보 작성",
  "펀딩 일정",
  "리워드",
  "프로젝트 계획",
  "개발노트 설정",
];

export default function CreateProject() {
  const [stage, setStage] = useState("createNotice");
  const { page } = useCreateProjectStore();

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="h-screen w-screen bg-gray-100">
      {page === "selectProjectType" && <SelectProjectTypeComponent />}
      {page === "createNotice" && <CreateNoticeComponent />}
      {!(page === "selectProjectType" || page === "createNotice") && (
        <div className="flex h-full bg-gray-100">
          <CreateProjectSidebar />
          {page === "크리에이터 정보 작성" && <CreatorInformFrom />}
          {page === "프로젝트 정보 작성" && <ProjectDetailForm />}
          {page === "펀딩 일정" && <FundingScheduleForm />}
          {page === "리워드" && <ProjectRewarodForm />}
          {page === "개발노트 설정" && <DevelopNotePriodForm />}
        </div>
      )}
    </div>
  );
}
