import { useState } from "react"
import TextEditor from "../TextEditor/TextEditor"

export default function ProjectUploadComponent() {
    const [projectname, setProjectName] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [projectStartDay, setProjectStartDay] = useState<string>("");
    const [projectEndDay, setProjectEndDay] = useState<string>("");

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
                        <input className="w-96" type="String" onChange={(event: React.ChangeEvent) => setProjectName(event.target.value)} />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>장르 </label>
                    </th>
                    <td>
                        <input type="String" onChange={(event: React.ChangeEvent) => setGenre(event.target.value)} />
                    </td>
                    <th>
                        <label>프로젝트 시작일</label>
                    </th>
                    <td>
                        <input className="w-28" type="String" onChange={(event: React.ChangeEvent) => setProjectStartDay(event.target.value)} />
                    </td>
                    <th>
                        <label>프로젝트 종료일 </label>
                    </th>
                    <td>
                        <input className="w-28" type="String" onChange={(event: React.ChangeEvent) => setProjectEndDay(event.target.value)} />
                    </td>
                </tr>
            </table>
            <TextEditor />
        </div >
    )
}
