import NewProjectItem from "./NewProjectItem";
import { useEffect, useState } from "react";

export default function NewProjectList() {

    const pageNum = 24;
    const projectlist = [null, null, null, null, null, null, null, null];
    const [nowPage, setNowPage] = useState<number>(1);

    function Dot(num: number) {
        if (nowPage == num.num) {
            return (
                <button>
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                </button>
            );
        }
        return (
            <button onClick={() => setNowPage(num.num)}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
            </button>
        );
    }

    return (
        <div className="">
            <div className="grid grid-cols-4 my-4 gap-4">
                {
                    projectlist.map((item, index) => (
                        <NewProjectItem key={index} />
                    ))
                }
            </div>
            <div className="place-content-center flex gap-2 ">
                <Dot num={1} />
                <Dot num={2} />
                <Dot num={3} />
                <Dot num={4} />
                <Dot num={5} />
            </div>
        </div>
    );
}
