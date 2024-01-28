import Image from "next/image";
import navLogo from "@/public/createproject/nav/navlogo.png";
import dooingIcon from "@/public/createproject/icon/doingIcon.png";
import successIcon from "@/public/createproject/icon/successIcon.png";
import characterIcon from "@/public/createproject/icon/character.png";
import chatBallon from "@/public/createproject/icon/speakballoon.png";
import nameCard from "@/public/createproject/icon/fundyNamecard.png";

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

  const process = ["yes", "yes", "yes", "doing"];

  const position = 1;

  return (
    <div className="w-[20rem] h-fit bg-black relative">
      <div className="grid w-full h-60">
        <div className="w-fit h-fit mx-auto my-auto align-middle">
          <Image className="mx-auto w-20 h-20" src={navLogo} alt="navLogo" />
          <div className="w-fit flex text-white mx-auto">
            <p className="text-3xl text-bold">{name}</p>
            <p className="mt-2 ml-1">님의</p>
          </div>
          <p className="text-gray-400 text-xl">펀딩 프로젝트 월드맵</p>
        </div>
      </div>
      <hr className="w-[16rem] mx-auto bg-gray-300 mb-12" />
      <div className="text-white  text-xl font-light">
        {stage.map((item, index) => (
          <div className="w-[15rem] mx-auto my-4 flex justify-between">
            <p key={index}> {item}</p>
            {process[index] ? (
              process[index] === "yes" ? (
                <Image className="w-6 h-6" src={successIcon} alt="success" />
              ) : (
                <Image className="w-6 h-6" src={dooingIcon} alt="dooingIcon" />
              )
            ) : null}
          </div>
        ))}
      </div>
      <div className="relative mt-16">
        <Image className="mx-auto" src={chatBallon} alt="chatballon" />
        <Image
          className="absolute -top-6 left-4"
          src={nameCard}
          alt="nameCard"
        />
        <p className="absolute top-8 left-28"> 도움말 도움말 </p>
        <Image className="mx-auto" src={characterIcon} alt="character" />
        <button className="w-[13rem] h-12 ml-[3rem] my-6 bg-gray-100">
          올리기
        </button>
      </div>
    </div>
  );
}
