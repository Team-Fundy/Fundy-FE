import DevNoteDetailModalHeader from "./DevNoteDetailModalHeader";
import DevNoteDetailModalCommentList from "./DevNoteDetailModalCommentList";
import CommentCreator from "./CommentCreator";

export default function DevNoteDetailModal() {
  const detail = "";
  return (
    <div className="w-3/4 bg-black">
      <DevNoteDetailModalHeader />
      <div className="px-16">{detail}</div>
      <DevNoteDetailModalCommentList />
    </div>
  );
}
