import { ChangeEvent, useState } from "react"


export default function CreatorInformFrom()
{
    const [creatorName, setCreatorName] = useState<string>("");

    function getInputBorderColor(str : string, lengthLimit : number)
    {
        if (str.length > 0 && str.length <= lengthLimit)
        {
            return "border-gray-500"
        } else {
            return "border-red-600"
        } 
    }

    function getInputStringLength(str : string)
    {
        return str.length.toString();
    }

    function getInputLimitStringColor(str : string, lengthLimit : number)
    {
        if (str.length > lengthLimit)
        {
            return "text-red-600";;
        } else {
        return "text-gray-500";
        }
    }

    return (
        <div>
            <h1 className = "font-bold text-3xl">펀디에 어서오세요.</h1>
            <p className = "text-sm">펀딩에 필요한 정보들을 작성해주세요.</p>

            <div className ="w-96 my-14">
                <div className ="flex h-fit gap-1">
                    <h2 className ="font-semibold text-lg my-2">크리에이터 이름</h2>
                    <p className ="my-auto text-xl text-red-500">*</p>
                </div>
                <p className ="my-2">크리에이터 혹은 크리에티 팀의 이름을 작성해주세요.</p>
                <input 
                    className={`rounded-sm w-96 h-12 border-[0.1rem] ${getInputBorderColor(creatorName,40)}`}
                    placeholder="     40자 이내의 이름을 작성해주세요."
                    onChange={(event)=>setCreatorName(event.target.value)}/>
                <div className ="flex justify-between">
                    { creatorName.length === 0
                       ? <p className="my-2 text-sm text-gray-600 text-red-600 font-medium">필수 항목 입니다.</p>
                       : <p></p> }
                    <p className={`my-2 text-sm ${getInputLimitStringColor(creatorName,40)} `}>{getInputStringLength(creatorName)}/40자</p>
                </div>
            </div>

            <br/>

            <h2>크리에이터 프로필</h2>
            <p>크리에이터 혹은 크리에티 팀의 프로필을 작성해주세요.</p>
            <div className ="flex gap-2">
                <input type="file"></input>
                <div className ="border-2">
                    <div>
                        <label>파일형식 :</label>
                        <p>jpg 또는 png</p>
                    </div>
                    <div>
                        <label>사이즈 :</label>
                        <p>최대 (가로 512px, 세로 512px 이하)</p>
                    </div>
                </div>
            </div>

            <br/>

            <h2>크리에이터 소개 글</h2>
            <p>크리에이터 혹은 크리에티 팀의 소개글을 작성해주세요.</p>
            <input placeholder="150자 이내의 설명을 작성해주세요."/>

            <br/>

            <h2>대표자 명</h2>
            <p>크리에이터 혹은 크리에티 팀의 대표자 이름을 작성해주세요.</p>
            <input placeholder="대표자 명을 작성해주세요."/>

            <br/>

            <h2>대표자 명</h2>
            <p>크리에이터 혹은 크리에티 팀의 대표자 이름을 작성해주세요.</p>
            <input placeholder="대표자 명을 작성해주세요."/>

            <br/>

            <h2>본인 인증</h2>
            <p>대표자 본인 명의의 휴대폰 번호로 인증해주세요.</p>
            <div className ="flex">
                <input placeholder="본인 인증을 완료해주세요"/>
                <button>인증하기</button>
            </div>

            <br/>

            <h2>입금 계좌</h2>
            <p>대표자 본인 명의의 입금 계좌를 입력하세요.</p>
            <input placeholder="본인 인증을 완료해 주세요."/>

            <br/>

            <h2>세금 계산서 발행</h2>
            <p>대표자 본인 명의의 세금 계산서를 발행해주세요.</p>
            <input placeholder="본인 인증을 완료해 주세요."/>
        </div>
    )
}