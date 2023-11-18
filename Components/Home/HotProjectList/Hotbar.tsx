import hoticon2 from "@/public/home/icon/hoticon2.png"
import Image from "next/image";

export default function Hotbar() {
    const makehotlicon = (num: number) => {
        const newArr = [];
        for (let i = 0; i < num; i++) {
            newArr.push(<Image className = "flex-none w-16 h-12" src={hoticon2} alt="" />);
        }
        return newArr;
    };

    return (
        <div className="flex gap-8 z-0 animate-leftTransition">
            {makehotlicon(20)}
        </div>
    );
}
