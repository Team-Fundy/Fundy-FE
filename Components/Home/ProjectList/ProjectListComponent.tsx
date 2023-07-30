import ProjectItem from "./ProjectItem";

export default function ProjectListComponent() {
    const projectlist = [null, null, null, null];
    return (
        <div className="h-64 w-full bg-yellow-300">
            <p className="">프로젝트 리스트 </p>
            <div className="grid gap-x-2 grid-cols-4 place-items-center my-4">
                {
                    projectlist.map((item, index) => <ProjectItem key={index} />)
                }
            </div>
        </div>
    )
}
