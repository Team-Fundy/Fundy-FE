import board from "@/public/home/developnote-title-bg.png";
import DevelopNoteItem from "./DevelopNoteItem";

export default function DevelopNoteList() {
    const projectlist = [null, null, null, null, null];
    return (
        <div className="flex my-4 gap-4">
            {
                projectlist.map((item, index) => (
                    <DevelopNoteItem key={index} />
                ))
            }
        </div>
    );
}
