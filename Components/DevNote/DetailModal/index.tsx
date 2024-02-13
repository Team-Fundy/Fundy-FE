import DevNoteDetailModalHeader from "./DevNoteDetailModalHeader";
import DevNoteDetailModalCommentList from "./DevNoteDetailModalCommentList";

export default function DevNoteDetailModal() {
  const detail = "";
  return (
    <div className="w-3/4 bg-black">
      <DevNoteDetailModalHeader />
      <div className="px-16">
        {detail}
        <DevNoteDetailModalCommentList />
      </div>
    </div>
  );
}
