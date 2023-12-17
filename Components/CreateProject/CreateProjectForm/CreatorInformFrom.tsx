
export default function CreatorInformFrom()
{
    return (
        <div>
            <h1>펀디에 어서오세요.</h1>
            <p>펀딩에 필요한 정보들을 작성해주세요.</p>

            <h2>크리에이터 이름</h2>
            <p>크리에이터 혹은 크리에티 팀의 이름을 작성해주세요.</p>
            <input placeholder="40자 이내의 이름을 작성해주세요."/>

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