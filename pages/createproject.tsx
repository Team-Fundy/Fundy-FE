import { useState } from "react";

import SelectProjectTypeComponent from "@/Components/CreateProject/SelectTypeComponent";
import CreateNoticeComponent from "@/Components/CreateProject/CreateNoticeComponent";
import CreateProjectFormComponent from "@/Components/CreateProject/CreateProjectFormComponent";
import CreateProjectSidebar from "@/Components/CreateProject/CreateProjectSidebar";
import FundingScheduleForm from "@/Components/CreateProject/FundingScheduleForm/FundingScheduleForm";
import ProjectDetailForm from "@/Components/CreateProject/ProjectDetailForm/ProjectDetailForm";
import DevelopNotePriodForm from "@/Components/CreateProject/DevelopNotePriodForm/DevelopNotePriodForm";
import ProjectRewarodForm from "@/Components/CreateProject/ProjectRewardForm";
import CreatorInformFrom from "@/Components/CreateProject/CreatorProjectForm/CreatorInformFrom";
import Header from "@/Components/Header/Header";

import { useCreateProjectStore } from "@/store/createProjectStore";

export async function getServerSideProps() {
  return { props: { layout: "createProjectPage" } };
}

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

  return (
    <div className="h-svw w-svw bg-slate-150">
      {page === "selectProjectType" || page === "createNotice" ? (
        <div>
          <Header mode={"Normal"} />
          {page === "selectProjectType" && <SelectProjectTypeComponent />}
          {page === "createNotice" && <CreateNoticeComponent />}
        </div>
      ) : (
        <div className="flex w-full h-full bg-gray-100">
          <CreateProjectSidebar />
          <div className="w-full ml-[21%]">
            <Header mode={"Normal"} />
            <div className="ml-[8rem]">
              {page === "크리에이터 정보 작성" && <CreatorInformFrom />}
              {page === "프로젝트 계획" && <ProjectDetailForm />}
              {page === "프로젝트 정보 작성" && <CreateProjectFormComponent />}
              {page === "펀딩 일정" && <FundingScheduleForm />}
              {page === "리워드" && <ProjectRewarodForm />}
              {page === "개발노트 설정" && <DevelopNotePriodForm />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
