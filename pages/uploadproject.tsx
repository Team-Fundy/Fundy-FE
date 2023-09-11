import TextEditor from "@/Components/TextEditor/TextEditor"
import { useState } from "react"
import axios from "axios";

type rewardtype = {
    name: string,
    image: string,
    description: string,
    minimumPrice: number,
}
type datatype = {
    request: {
        name: string,
        mainImages: string,
        genres: string,
        startDateTime: string,
        endDateTime: string,
        devNoteUploadCycle: number,
        devNoteUploadDay: string,
        rewards: rewardtype,
    }
}

export default function Uploadproject() {

    const [data, setData] = useState<datatype>({
        request: {
            name: "",
            mainImages: "",
            genres: "",
            startDateTime: "",
            endDateTime: "",
            devNoteUploadCycle: 1,
            devNoteUploadDay: "",
            rewards:
            {
                name: "리워드1",
                image: "http://이미지주소",
                description: "해당 리워드는 ...",
                minimumPrice: 1000
            }
        },
    });
    const [dayofweekarr, setDayofWeekarr] = useState(Array.from({ length: 7 }, () => false));
    const [rewardNum, setRewardNum] = useState<Number>(0);
    const [contents, setContents] = useState<String>("");


    const changeData = (e: React.ChangeEvent) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const onClickDevelopNoteUploadDaybtn = (day: string) => {
        setData({
            ...data,
            [data.request.devNoteUploadDay]: day,
        })
    }

    const onClickUploadbtn = (event: React.FormEvent) => {
        event.preventDefault();
        axios.post('/api/project', { ...data, descriptionFile: contents })
            .then()
            .catch();
    }

    return (
        <div className="bg-slate-100">
            <form onSubmit={onClickUploadbtn}>
                <div>
                    <label htmlFor="name">제목 </label>
                    <input name="name" placeholder="제목" onChange={changeData} />
                </div>
                <div>
                    <label htmlFor="genres">장르</label>
                    <input name="genres" placeholder="" onChange={changeData} />
                    <label htmlFor="startDateTime">펀딩 시작일</label>
                    <input name="startDateTime" placeholder="" onChange={changeData} />
                    <label htmlFor="endDateTime">펀딩 끝나는날짜</label>
                    <input name="endDateTime" placeholder="" onChange={changeData} />
                </div>
                <div className="flex gap-4">
                    <label htmlFor="devNoteUploadCycle">개발 노트 올리는 주기</label>
                    <input name="devNoteUploadCycle" type="string" placeholder="" onChange={changeData} />
                    <label>개발 노트 올리는 요일</label>
                    <button className="bg-slate-300 px-4 rounded-md" onClick={() => onClickDevelopNoteUploadDaybtn("SUNDAY")}>일</button>
                    <button className="bg-slate-300 px-4 rounded-md" onClick={() => onClickDevelopNoteUploadDaybtn("MONDAY")}>월</button>
                    <button className="bg-slate-300 px-4 rounded-md" onClick={() => onClickDevelopNoteUploadDaybtn("TUESDAY")}>화</button>
                    <button className="bg-slate-300 px-4 rounded-md" onClick={() => onClickDevelopNoteUploadDaybtn("WEDNESDAY")}>수</button>
                    <button className="bg-slate-300 px-4 rounded-md" onClick={() => onClickDevelopNoteUploadDaybtn("THURSDAY")}>목</button>
                    <button className="bg-slate-300 px-4 rounded-md" onClick={() => onClickDevelopNoteUploadDaybtn("FRIDAY")}>금</button>
                    <button className="bg-slate-300 px-4 rounded-md" onClick={() => onClickDevelopNoteUploadDaybtn("SATURDAY")}>토</button>
                </div>
                <div>
                    <label>Reward</label>
                    <input />
                </div>
                <TextEditor setContents={setContents} />
                <div className="ml-2 flex gap-5">
                    <button type="submit" className="bg-slate-300">업로드</button>
                    <button className="bg-slate-300">취소</button>
                </div>
            </form>
        </div >
    )
}
