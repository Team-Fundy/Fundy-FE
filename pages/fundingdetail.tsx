import FundingDetailMain from "@/Components/FundingDetail/FundingDetailMain"
import FundingDetailCard from "@/Components/FundingDetail/FundingDetailCard"

export default function fundingDetail() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-3rem)]">
      <div className="snap-start h-[calc(100vh-3rem)] bg-white text-black">
        {/* <div className="h-[calc(100vh-3rem)] bg-dot-pattern bg-no-repeat bg-center-center"> */}
        {/* Todo: 배경이미지 이슈 해결 후 주석 제거할 것 */}
        <div className="mx-[15%]">
          <FundingDetailMain />
        </div>
        {/* </div> */}
      </div>
      <div className="snap-start h-[calc(100vh-3rem)] bg-black text-white">
        <div className="mx-[15%]">
          <FundingDetailCard />
        </div>
      </div>
    </div>
  );
}
