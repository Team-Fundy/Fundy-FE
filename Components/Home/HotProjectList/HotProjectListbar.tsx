import HotProjectItem from "./HotProjectItem"
import { useState, useEffect } from "react";
import tempimage from "@/public/home/temp/image 16.png"
import tempimage2 from "@/public/home/temp/image 18 (1).png"
import tempimage3 from "@/public/home/temp/Frame 1145.png"


export type HotProjectItemDataType = {
    percentage: number,
    money: number,
    name: string,
    nickname: string,
    genre: string,
}

export default function HotProjectListbar() {
    const projectlist = [null, null, null, null, null];
    const [spotlightedProject, setSportlightedProject] = useState<number>(1);
    const [projectClassName, setProejctClassName] = useState<Array<string>>([]);
    const [itemdatas, setItemdatas] = useState<Array<HotProjectItemDataType>>([{ percentage: 10324, money: 164084, name: "TURN DUNGEON", nickname: "도미닉", genre: "ROGLIKE" }]);

    useEffect(() => {
        if (projectlist.length > 0) {
            let arr = Array.from({ length: projectlist.length }, (v, i) => i + 1 === spotlightedProject ? "brightness-100" : "brightness-75");
            setProejctClassName(arr);
        }
    }, [spotlightedProject]);

    useEffect(() => {
        const spotlight = setInterval(() => {
            setSportlightedProject(spotlightedProject => spotlightedProject === projectlist.length ? 1 : spotlightedProject + 1);
        }, 5000);
        return () => clearInterval(spotlight);
    }, []);

    return (
        <div className="w-full bg-gray-200">
            <div className="flex gap-4 overflow-hidden  pt-16">
                {
                    projectlist.map((item, index) => (index === 0 ? <HotProjectItem key={index} highlight={spotlightedProject === index + 1 ? true : false} projectimg={tempimage} itemdata={itemdatas[0]} rank={index} /> : <HotProjectItem key={index} highlight={spotlightedProject === index + 1 ? true : false} projectimg={tempimage2} itemdata={itemdatas[0]} rank={index} />))
                }
            </div>
        </div >
    )
}
