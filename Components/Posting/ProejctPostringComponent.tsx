
type Contenttype = {
    contents: any
}

export default function ProejctPostringComponent({ contents }: Contenttype) {
    return (
        <div> 
            <div dangerouslySetInnerHTML={contents}/>
        </div>
    )
}
