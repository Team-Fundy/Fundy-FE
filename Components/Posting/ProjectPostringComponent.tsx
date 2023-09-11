
type Contenttype = {
    contents: any
}

export default function ProjectPostringComponent({ contents }: Contenttype) {
    return (
        <div>
            <div dangerouslySetInnerHTML={contents} />
        </div>
    )
}
