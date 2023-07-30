import HotProjectItem from "./HotProjectItem"
export default function HotProjectListComponent() {
    const projectlist = [null, null, null, null, null, null, null, null];
    return (
        <div className="w-full bg-green-500">
            <p className="my-3 bold">핫 프로젝트 리스트 </p>
            <div className="grid grid-cols-4 gap-4 place-items-center">
                {
                    projectlist.map((item, index) => <HotProjectItem key={index} />)
                }
            </div>
        </div>
    )
}
