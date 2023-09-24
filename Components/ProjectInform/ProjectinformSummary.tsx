import { useState } from "react"
import Image from "next/image"
import Temp from "@/public/home/temp/Frame 1145.png"
import Temp2 from "@/public/home/temp/image 39.png"
import Temp3 from "@/public/home/temp/image 16.png"
import sharebutton from "@/public/home/button/sharebutton.png"
import likebutton from "@/public/home/button/likebutton.png"

export default function ProjectinformSummary() {

    const Imgs = [null, Temp, Temp2, Temp3];
    const genre = ['전략', '캐주얼', '판타지'];
    const title = "카드 오브 던전 클래식"
    //const detail = "카드 오브 던전 클래식은 당신만의 카드르 모아 다양한 던전에 대항하여 주인공에 얽혀있는 수수께끼를 푸는 전략 캐주얼 판타지 게임입니다. 그리고 모시깽이를 하기위 모시깽이 하고자 하고 이를 위해 모시깽이를 할 것입니다. 그리고 모시깽이들을 위하여 모시깽이도 할 예정입니다. 많관부 가나다라마바사아자차차";
    const detail = "1";

    const [titleimg, setTitleImg] = useState<Image>(Temp);
    const targetmoney = 0;
    const nowmoney = 0;

    function onClickTitleBtn(num: any) {
        setTitleImg(Imgs[num]);
    }
    return (
        <div className="bg-white">
            <div className="flex place-content-center py-12  gap-24">
                <div>
                    <Image src={titleimg} alt="" width={700} height={400} />
                    <div className="flex gap-4">
                        <button onClick={() => onClickTitleBtn(1)}>
                            <Image src={Temp2} alt="" width={200} height={120} />
                        </button>
                        <button onClick={() => onClickTitleBtn(2)}>
                            <Image src={Temp} alt="" width={200} height={120} />
                        </button>
                        <button onClick={() => onClickTitleBtn(3)}>
                            <Image src={Temp3} alt="" width={200} height={120} />
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-4">
                        {genre.map((item, index) => <p key={index} className="px-4 bg-slate-200 text-slate-500"> {item}</p>)}
                    </div>
                    <p className="text-4xl my-8 font-bold">{title}</p>
                    <p className="text-2xl my-4 w-2/5">{detail}</p>

                    <div className="border-b-4 w-96 h-4 border-slate-400 my-4   "></div>
                    <table className="border-spacing-x-16">
                        <tbody>
                            <tr>
                                <td>
                                    <p className="font-bold">펀딩 기간</p>
                                </td>
                                <td>
                                    <p className="">2023.08.24 ~ 2024.06.31</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="font-bold">개발노트 업로드</p>
                                </td>
                                <td>
                                    <p className="">2주마다 화요일에 업로드 예정</p>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div className="my-16">
                        <div className="my-8">
                            <p className="text-3xl">목표금액</p>
                            <div className="flex">
                                <p className="text-3xl text-violet-600 font-bold">{targetmoney}</p>
                                <p className="text-2xl">원</p>
                            </div>
                        </div>
                        <div className="my-8">
                            <p className="text-3xl"> 총 펀딩금액</p>
                            <div className="flex">
                                <p className="text-3xl text-violet-600 font-bold">{nowmoney}</p>
                                <p className="text-2xl">원</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button>
                            <Image src={likebutton} alt="" />
                        </button>
                        <button>
                            <Image src={likebutton} alt="" />
                        </button>
                        <button className="ml-8 bg-violet-600 w-72 h-16 text-white font-['dalmoori']">프로젝트 후원하기</button>

                    </div>
                </div >
            </div >
        </div >
    );
}