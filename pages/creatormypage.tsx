import CreatorMyPageContentBoard from "@/Components/Creator/CreatorMyPageContentBoard";
import CreatorMyPageProfile from "@/Components/Creator/CreatorMyPageProfile";
import tempbg from "@/public/home/hometitle.png"
import { useState } from "react";
import Image from "next/image";


export default function Creatormypage() {
    const [selectedOption, setSelectedOption] = useState<number>(1);

    return (
        <div className="relative z-1">
            <Image src={tempbg} alt="" className="h-[26rem]" />

            <div className="flex justify-center gap-4 my-6">
                <div className="relative z-2 -top-48">
                    <CreatorMyPageProfile />
                </div>
                <CreatorMyPageContentBoard />
            </div>
        </div>);
}