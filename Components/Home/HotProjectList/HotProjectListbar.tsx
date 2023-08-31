import HotProjectItem from "./HotProjectItem"

export default function HotProjectListbar() {
    const projectlist = [null, null, null, null, null];
    return (
        <div className="w-full bg-gray-200">
            <div className="flex gap-4">
                {
                    projectlist.map((item, index) => <HotProjectItem key={index} />)
                }
            </div>
        </div >
    )
}
