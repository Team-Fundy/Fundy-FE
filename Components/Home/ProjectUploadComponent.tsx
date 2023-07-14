import { useState } from "react"
import TextEditor from "../TextEditor/TextEditor"

export default function ProjectUploadComponent() {
    const [projectname, setProjectName] = useState("");
    const [genre, setGenre] = useState("");
    const [projectStartDay, setProjectStartDay] = useState("");
    const [projectEndDay, setProjectEndDay] = useState("");

    return (
        <div>
            <h1 className="text-2xl my-1"> 프로젝트 업로드 </h1>
            <hr />
            <br />

            <table className="">
                <tr>
                    <th>
                        <label>프로젝트 명 </label>
                    </th>
                    <td>
                        <input className="w-96" type="String" onChange={(event) => setProjectName(event.target.value)} />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>장르 </label>
                    </th>
                    <td>
                        <input type="String" onChange={(event) => setGenre(event.target.value)} />
                    </td>
                    <th>
                        <label>프로젝트 시작일</label>
                    </th>
                    <td>
                        <input className="w-28" type="String" onChange={(event) => setProjectStartDay(event.target.value)} />
                    </td>
                    <th>
                        <label>프로젝트 종료일 </label>
                    </th>
                    <td>
                        <input className="w-28" type="String" onChange={(event) => setProjectEndDay(event.target.value)} />
                    </td>
                </tr>
            </table>
            <TextEditor />
        </div >
    )
}
