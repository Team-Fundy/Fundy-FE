import ProjectInformTeamCard from "@/Components/ProjectInform/ProjectInformTeamCard"
import ProjectinformSummary from "@/Components/ProjectInform/ProjectinformSummary"
import ProjectinformMenuBar from "@/Components/ProjectInform/ProjectInformMenubar"
import ProjectInformRewardItem from "@/Components/ProjectInform/ProjectInformRewardItem"

import Temp2 from "@/public/home/temp/image 39.png"

export default function projectinform() {

    return (
        <div className="bg-white">
            <ProjectinformSummary />
            <ProjectinformMenuBar />
            <ProjectInformTeamCard projectimg={Temp2} teamname="프로젝트 팀  이름" projectdetail="카드 오브 던전 클래식은 당신만의 카드르 모아 다양한 던전에 대항하여 주인공에 얽혀있는 수수께끼를 푸는 전략 캐주얼 판타지 게임 - 팀소개" />
            <ProjectInformRewardItem  rewardtitle="리워드 타이틀" rewardimg={Temp2} projectdetail="1" />
        </div >
    )
}