import { useState } from "react";
import Image from "next/image";
import warningIconfrom from "@/public/createproject/waringIcon.png";
import ImageUploadButton from "@/Components/Component/ImageUploadButton";

export default function CreatorInformFrom() {
  const [creatorName, setCreatorName] = useState<string>("");
  const [creatorIntroduce, setCreatorIntroduce] = useState<string>("");
  const [agentName, setAgentName] = useState<string>("");
  const [isIdentityVerification, setIsIdentityVerification] =
    useState<boolean>(false);
  const [account, setAccount] = useState<string>("");
  const [taxbill, setTaxbill] = useState<string>("");

  function getInputBorderColor(str: string, lengthLimit: number) {
    if (str.length > 0 && str.length <= lengthLimit) {
      return "border-gray-500";
    } else {
      return "border-red-600";
    }
  }

  function getInputStringLength(str: string) {
    return str.length.toString();
  }

  function getInputLimitStringColor(str: string, lengthLimit: number) {
    if (str.length > lengthLimit) {
      return "text-red-600";
    } else {
      return "text-gray-500";
    }
  }

  return (
    <div className="mx-16  my-12 h-fit bg-slate-100">
      <h1 className="my-3 font-bold text-5xl">펀디에 어서오세요.</h1>
      <p>펀딩에 필요한 정보들을 작성해주세요.</p>

      <div className="w-96 my-14">
        <div className="flex h-fit gap-1">
          <h2 className="font-semibold text-lg my-2">크리에이터 이름</h2>
          <p className="my-auto text-xl text-red-500">*</p>
        </div>
        <p className="my-2 text-gray-600">
          크리에이터 혹은 크리에티 팀의 이름을 작성해주세요.
        </p>
        <input
          className={`rounded-sm w-96 h-12 border-[0.1rem] ${getInputBorderColor(
            creatorName,
            40
          )} text-start`}
          placeholder="   40자 이내의 이름을 작성해주세요."
          onChange={(event) => setCreatorName(event.target.value)}
        />
        <div className="flex justify-between">
          {creatorName.length === 0 ? (
            <p className="my-2 text-sm text-gray-600 text-red-600 font-medium">
              필수 항목 입니다.
            </p>
          ) : (
            <p></p>
          )}
          <p
            className={`my-2 text-sm ${getInputLimitStringColor(
              creatorName,
              40
            )} `}
          >
            {getInputStringLength(creatorName)}/40자
          </p>
        </div>
      </div>

      <br />

      <h2 className="font-semibold text-lg my-2">크리에이터 프로필</h2>
      <p className="my-2 text-gray-600">
        크리에이터 혹은 크리에티 팀의 프로필을 작성해주세요.
      </p>
      <div className="flex gap-2">
        <ImageUploadButton
          className="bg-white px-20 py-16"
          onChangeFile={(file) => console.log(file)}
        />
        <div className="w-fit h-fit px-6 py-6 border-2 border-gray-200 bg-white ">
          <div className="flex">
            <Image
              src={warningIconfrom}
              alt="warningIcon"
              className="w-5 h-5 my-1 mx-2"
            />
            <div>
              <div className="flex gap-1">
                <label className="text-gray-300">파일형식 :</label>
                <p className="text-gray-500"> jpg 또는 png</p>
              </div>
              <div className="flex gap-1">
                <label className="text-gray-300">사이즈 :</label>
                <p className="text-gray-500">
                  {" "}
                  최대 (가로 512px, 세로 512px 이하)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="w-[34rem] my-14">
        <h2 className="font-semibold text-lg my-3">크리에이터 소개 글</h2>
        <p className="my-2 text-gray-600">
          크리에이터 혹은 크리에티 팀의 소개 글을 작성해주세요..
        </p>
        <input
          className={`rounded-sm w-[34rem] h-[7.5rem] border-[0.1rem] border-gray-500 text-start`}
          placeholder=" 150자 이내의 이름을 작성해주세요."
          onChange={(event) => setCreatorIntroduce(event.target.value)}
        />
        <div className="flex justify-between">
          <p></p>
          <p
            className={`my-2 text-sm ${getInputLimitStringColor(
              creatorIntroduce,
              150
            )} `}
          >
            {getInputStringLength(creatorIntroduce)}/150자
          </p>
        </div>
      </div>

      <br />

      <div className="w-96 my-14">
        <div className="flex h-fit gap-1">
          <h2 className="font-semibold text-lg my-2">대표자 명</h2>
          <p className="my-auto text-xl text-red-500">*</p>
        </div>
        <p className="my-2 text-gray-600">
          크리에이터 혹은 크리에티 팀의 대표자 이름을 작성해주세요.
        </p>
        <input
          className={`rounded-sm w-96 h-12 border-[0.1rem] ${getInputBorderColor(
            agentName,
            20
          )} text-start`}
          placeholder="   대표자 명을 작성해주세요."
          onChange={(event) => setAgentName(event.target.value)}
        />
        {agentName.length === 0 ? (
          <p className="my-2 text-sm text-gray-600 text-red-600 font-medium">
            필수 항목 입니다.
          </p>
        ) : (
          <p></p>
        )}
      </div>

      <br />

      <div className="w-96 my-14">
        <div className="flex h-fit gap-1">
          <h2 className="font-semibold text-lg my-2">본인 인증</h2>
          <p className="my-auto text-xl text-red-500">*</p>
        </div>
        <p className="my-2 text-gray-600">
          대표자 본인 명의의 휴대폰 번호로 인증해주세요.
        </p>
        <div
          className={`rounded-sm w-96 h-12 border-[0.1rem] bg-white ${
            isIdentityVerification ? "border-gray-500" : "border-red-600"
          } text-start flex justify-between`}
        >
          <div className="flex">
            <Image
              src={warningIconfrom}
              alt="warningIcon"
              className="w-5 h-5 my-auto mx-2"
            />
            <p className="my-auto text-slate-400 text-sm font-light">
              본인 인증을 완료해 주세요.
            </p>
          </div>
          <button className="w-fit h-fit mx-2 rounded-md px-6 py-1 my-auto border-2 border-slate-550 text-slate-400 text-sm">
            인증하기
          </button>
        </div>
        {isIdentityVerification === false ? (
          <p className="my-2 text-sm text-gray-600 text-red-600 font-medium">
            필수 항목 입니다.
          </p>
        ) : (
          <p></p>
        )}
      </div>

      <br />

      <div className="w-96 my-14">
        <div className="flex h-fit gap-1">
          <h2 className="font-semibold text-lg my-2">입금 계좌</h2>
          <p className="my-auto text-xl text-red-500">*</p>
        </div>
        <p className="my-2 text-gray-600">
          대표자 본인 명의의 입금 계좌를 입력하세요.
        </p>
        <input
          className={`rounded-sm w-96 h-12 border-[0.1rem] ${getInputBorderColor(
            account,
            40
          )} text-start`}
          placeholder="   입금 계좌를 입력하세요."
          onChange={(event) => setAccount(event.target.value)}
        />
        <div className="flex justify-between">
          {account.length === 0 ? (
            <p className="my-2 text-sm text-gray-600 text-red-600 font-medium">
              필수 항목 입니다.
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <br />

      <div className="w-96 my-14">
        <div className="flex h-fit gap-1">
          <h2 className="font-semibold text-lg my-2">세금 계산서 발행</h2>
          <p className="my-auto text-xl text-red-500">*</p>
        </div>
        <p className="my-2 text-gray-600">
          대표자 본인 명의의 세금 계산서를 발행해주세요.
        </p>
        <input
          className={`rounded-sm w-96 h-12 border-[0.1rem] ${getInputBorderColor(
            taxbill,
            40
          )} text-start`}
          placeholder="   세금 계산서를 발행해주세요."
          onChange={(event) => setTaxbill(event.target.value)}
        />
        <div className="flex justify-between">
          {taxbill.length === 0 ? (
            <p className="my-2 text-sm text-gray-600 text-red-600 font-medium">
              필수 항목 입니다.
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
