import TextEditor from "@/Components/TextEditor/TextEditor"
import { useState } from "react"
import axios from "axios";

export default function Uploadproject() {

    const [data, setData] = useState({
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
        descriptionFile: ""
    });
    const [dayofweekarr, setDayofWeekarr] = useState(Array.from({ length: 7 }, () => false));
    const [rewardNum, setRewardNum] = useState<Number>(0);
    const [contents, setContents] = useState<String>();


    const changeData = (e: any) => {
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

    const onClickUploadbtn = (event: any) => {
        event.preventDefault();
        axios.post('/api/project', data)
            .then()
            .catch();
    }

    return (
        <div className="bg-slate-100">
            <form onSubmit={onClickUploadbtn}>
                <div>
                    <label htmlFor="title">제목 </label>
                    <input name="name" placeholder="제목" onChange={changeData} />
                </div>
                <div>
                    <label htmlFor="title">펀딩 시작일</label>
                    <input id="startday" placeholder="" onChange={changeData} />
                    <label htmlFor="title">펀딩 끝나는날짜</label>
                    <input id="endday" placeholder="" onChange={changeData} />
                </div>
                <div className="flex gap-4">
                    <label htmlFor="title">개발 노트 올리는 주기</label>
                    <input id="endday" type="string" placeholder="" onChange={changeData} />
                    <label htmlFor="title">개발 노트 올리는 요일</label>
                    <button id="value" className="bg-slate-300 px-4 rounded-md" onClick={() => onClickDevelopNoteUploadDaybtn("SUNDAY")}>일</button>
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
