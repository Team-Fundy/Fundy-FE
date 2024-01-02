import Image from "next/image"
import Link from "next/link"
import CreatorInformFrom from "./CreateProjectForm/CreatorInformFrom"
import ProjectInformForm from "./ProjectionInformForm/ProjectInformForm"

export default function CreateProjectFormComponent()
{

    return (
        <div className ="mx-16 my-24">
            <ProjectInformForm/>
        </div>
    )
}