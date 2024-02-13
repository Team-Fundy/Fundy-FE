import DevNoteDetailModalHeader from "./DevNoteDetailModalHeader";
import DevNoteDetailModalCommentList from "./DevNoteDetailModalCommentList";

export default function DevNoteDetailModal() {
  const detail = "";
  return (
    <div>
      <DevNoteDetailModalHeader />
      {detail}
      <DevNoteDetailModalCommentList />
    </div>
  );
}
