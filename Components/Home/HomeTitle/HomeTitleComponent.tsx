import Image from "next/image"
import hometitleImage from "@/public/home/hometitle.png"
import HomeTitleItem from "./HomeTitleItem"
import { useState } from "react"

export default function HomeTitleComponent() {

    const [nowselectedproject, setNowSeletedproject] = useState<number>(2);
    const itemdata = [{ titleimg: hometitleImage, title: "던전 트릭", subtitle: "채워지기 때 입숨을 입숨은 차지하는 입숨은 내용이 사용하는 입숨은 채워지기 시각 시각적 그리킹이라고도 그래픽 표준 디자인 들어가는 그리킹이라고도 분야에서 이용된다. 때 폰트, 입숨은 프로젝트 채워지기 레이아웃 공뭐시기뭐시기" }, { titleimg: hometitleImage, title: "던전 트릭", subtitle: "채워지기 때 입숨을 입숨은 차지하는 입숨은 내용이 사용하는 입숨은 채워지기 시각 시각적 그리킹이라고도 그래픽 표준 디자인 들어가는 그리킹이라고도 분야에서 이용된다. 때 폰트, 입숨은 프로젝트 채워지기 레이아웃 공간만 때로 실제적인 디자인 입숨은 분야에서 타이포그래피, 최종 그리킹이라고도 채움 출판이나 사용할 그래픽 실제적인 디자인 결과물에 프로젝트 같은 무언가를 사용하는 글로도 입숨은 채움 글로도 최종 로렘 " }, { titleimg: hometitleImage, title: "던전 트릭", subtitle: "채워지기 때 입숨을 입숨은 차지하는 입숨은 내용이 사용하는 입숨은 채워지기 시각 시각적 그리킹이라고도 그래픽 표준 디자인 들어가는 그리킹이라고도 분야에서 이용된다. 때 폰트, 입숨은 프로젝트 채워지기 레이아웃 공간만 때로 실제적인 디자인 입숨은 분야에서 타이포그래피, 최종 그리킹이라고도 채움 출판이나 사용할 그래픽 실제적인 디자인 결과물에 프로젝트 같은 무언가를 사용하는 글로도 입숨은 채움 글로도 최종 로렘 " }]
    const [nowPage, setNowPage] = useState<number>(1);

    function Dot(num: number) {
        if (nowPage === num.num) {
            console.log("*");

            return (
                <button onClick={() => setNowPage(num.num)}>
                    <div className="w-4 h-4 bg-white rounded-full opacity-100"></div>
                </ button>
            );
        }
        else {
            return (
                <button onClick={() => setNowPage(num.num)}>
                    <div className="w-4 h-4 bg-gray-400 rounded-full opacity-70"></div>
                </button>
            );
        }
    }

    return (
        <div className="relative w-full">
            <div className="w-full">
                {
                    itemdata.length > 0 ?
                        <HomeTitleItem titleimg={itemdata[nowselectedproject].titleimg} title={itemdata[nowselectedproject].title} subtitle={itemdata[nowselectedproject].subtitle} /> :
                        null
                }

                <div className="absolute z-30 flex gap-6 bottom-20 right-80">
                    <Dot num={1} />
                    <Dot num={2} />
                    <Dot num={3} />
                    <Dot num={4} />
                    <Dot num={5} />
                    <Dot num={6} />
                    <Dot num={7} />
                    <Dot num={8} />
                    <Dot num={9} />
                </div>
            </div>
        </div >
    )
} 