import Image from "next/image"
import hometitleImage from "@/public/home/hometitle.png"
import HomeTitleItem from "./HomeTitleItem"
import directionbtn from "@/public/home/button/directionbutton.png"
import { useEffect, useState } from "react"

export default function HomeTitleComponent() {

    const [nowselectedproject, setNowSeletedproject] = useState<number>(2);
    const itemdata = [{ titleimg: hometitleImage, title: "던전 트릭", subtitle: "채워지기 때 입숨을 입숨은 차지하는 입숨은 내용이 사용하는 입숨은 채워지기 시각 시각적 그리킹이라고도 그래픽 표준 디자인 들어가는 그리킹이라고도 분야에서 이용된다. 때 폰트, 입숨은 프로젝트 채워지기 레이아웃 공간만 때로 실제적인 디자인 입숨은 분야에서 타이포그래피, 최종 그리킹이라고도 채움 출판이나 사용할 그래픽 실제적인 디자인 결과물에 프로젝트 같은 무언가를 사용하는 글로도 입숨은 채움 글로도 최종 로렘 " }, { titleimg: hometitleImage, title: "던전 트릭", subtitle: "채워지기 때 입숨을 입숨은 차지하는 입숨은 내용이 사용하는 입숨은 채워지기 시각 시각적 그리킹이라고도 그래픽 표준 디자인 들어가는 그리킹이라고도 분야에서 이용된다. 때 폰트, 입숨은 프로젝트 채워지기 레이아웃 공간만 때로 실제적인 디자인 입숨은 분야에서 타이포그래피, 최종 그리킹이라고도 채움 출판이나 사용할 그래픽 실제적인 디자인 결과물에 프로젝트 같은 무언가를 사용하는 글로도 입숨은 채움 글로도 최종 로렘 " }, { titleimg: hometitleImage, title: "던전 트릭", subtitle: "채워지기 때 입숨을 입숨은 차지하는 입숨은 내용이 사용하는 입숨은 채워지기 시각 시각적 그리킹이라고도 그래픽 표준 디자인 들어가는 그리킹이라고도 분야에서 이용된다. 때 폰트, 입숨은 프로젝트 채워지기 레이아웃 공간만 때로 실제적인 디자인 입숨은 분야에서 타이포그래피, 최종 그리킹이라고도 채움 출판이나 사용할 그래픽 실제적인 디자인 결과물에 프로젝트 같은 무언가를 사용하는 글로도 입숨은 채움 글로도 최종 로렘 " }]
    const [nowbar_width, setNowbar_width] = useState<string>("");
    const [nowbar_position, setNowbar_position] = useState<string>("");

    useEffect(() => {
        if (!itemdata)
            return;
        switch (itemdata.length) {
            case 1:
                setNowbar_width("w-72");
                break;
            case 2:
                setNowbar_width("w-36");
                break;
            case 3:
                setNowbar_width("w-24");
                break;
            case 4:
                setNowbar_width("w-18");
                break;
            case 5:
                setNowbar_width("w-14");
                break;
        }
    }, [itemdata])

    useEffect(() => {
        if (nowbar_width === "")
            return;
        console.log(nowselectedproject);
        console.log("left-" + (Number(nowbar_width.slice(2, 4)) * (nowselectedproject)).toString());
        setNowbar_position("left-" + (Number(nowbar_width.slice(2, 4)) * (nowselectedproject)).toString());
    }, [nowbar_width, nowselectedproject])

    function EntireBar() {
        return <div className="w-72 h-2 bg-white opacity-50"></div>
    }
    function NowBar() {
        return <div className={`${nowbar_width} h-2 absolute z-30 bottom-0 ${nowbar_position} bg-white`}></div>
    }

    function onClickMoveBtn(dir: string) {
        if (dir === "left")
            setNowSeletedproject((i) => i === 0 ? itemdata.length - 1 : i - 1);
        else
            setNowSeletedproject((i) => i === itemdata.length - 1 ? 0 : i + 1);
        console.log(dir);
    }

    return (
        <div className="relative w-full">
            <div className="w-full">
                {
                    itemdata.length > 0 ?
                        <HomeTitleItem titleimg={itemdata[nowselectedproject].titleimg} title={itemdata[nowselectedproject].title} subtitle={itemdata[nowselectedproject].subtitle} /> :
                        null
                }
                <div className="absolute z-20 left-72 bottom-24 px-4">
                    <div className="relative">
                        <EntireBar />
                        <NowBar />
                    </div>
                </div>
                <div className="absolute z-30 flex gap-16 bottom-24 right-72">
                    <Image src={directionbtn} alt="" width={70} height={70} onClick={() => onClickMoveBtn("left")} />
                    <Image className="rotate-180" src={directionbtn} alt="" width={70} height={70} onClick={() => onClickMoveBtn("right")} />
                </div>
            </div>
        </div >
    )
} 