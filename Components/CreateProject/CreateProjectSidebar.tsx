import Image from "next/image";
import navLogo from "@/public/createproject/nav/navlogo.png";
import dooingIcon from "@/public/createproject/icon/doingIcon.png";
import successIcon from "@/public/createproject/icon/successIcon.png";
import characterIcon from "@/public/createproject/icon/character.png";
import chatBallon from "@/public/createproject/icon/speakballoon.png";
import nameCard from "@/public/createproject/icon/fundyNamecard.png";
import { useCreateProjectStore } from "@/store/createProjectStore";

export default function CreateProjectSidebar() {
  const name = "땡땡땡";
  const stage = [
    "크리에이터 정보 작성",
    "프로젝트 정보 작성",
    "펀딩 일정",
    "리워드",
    "프로젝트 계획",
    "개발노트 설정",
  ];

  const { setPage, isFilled } = useCreateProjectStore();
  const position = 1;

  return (
    <div className="w-[21%] min-w-[10rem] max-w[15rem] h-fit pb-8 bg-black fixed">
      <div className="grid w-full h-[9rem] mt-8">
        <div className="w-fit h-fit mx-auto my-auto align-middle">
          <Image className="mx-auto w-18 h-18" src={navLogo} alt="navLogo" />
          <div className="w-fit flex text-white mx-auto mt-1">
            <p className="text-xl text-bold">{name}</p>
            <p className="mt-2 ml-1">님의</p>
          </div>
          <p className="text-gray-400 text-lg">펀딩 프로젝트 월드맵</p>
        </div>
      </div>
      <hr className="w-[16rem] mx-auto bg-gray-300 mb-2" />
      <div className="text-white  text-md font-light">
        {stage.map((item, index) => (
          <div className="w-[15rem] mx-auto my-3 flex justify-between">
            <button onClick={() => setPage(item)}>
              <p key={index}> {item}</p>
            </button>
            {isFilled[item] ? (
              <Image className="w-6 h-6" src={successIcon} alt="success" />
            ) : (
              <Image className="w-6 h-6" src={dooingIcon} alt="dooingIcon" />
            )}
          </div>
        ))}
      </div>
      <div className="relative w-full mt-12">
        <Image
          className="mx-auto w-[18rem] h-[4rem]"
          src={chatBallon}
          alt="chatballon"
        />
        <Image
          className="absolute -top-6 left-4"
          src={nameCard}
          alt="nameCard"
        />
        <p className="absolute top-6 left-28"> 도움말 도움말 </p>
        <Image
          className="mx-auto w-[3rem] h-[7rem]"
          src={characterIcon}
          alt="character"
        />
        <button className="w-[14rem] h-12 mx-auto my-6 bg-gray-100 block">
          {"올리기"}
        </button>
      </div>
    </div>
  );
}
