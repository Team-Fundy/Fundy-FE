import { useEffect } from "react";
import DevNoteDetailModalHeader from "./DevNoteDetailModalHeader";
import DevNoteDetailModalCommentList from "./DevNoteDetailModalCommentList";
import CommentCreator from "./CommentCreator";

interface DevNoteDetailModalProps {
  onClickExitButton: () => void;
}

export default function DevNoteDetailModal({
  onClickExitButton,
}: DevNoteDetailModalProps) {
  const detail = "";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed overflow-y-auto left-1/2 -translate-x-1/2 top-0 bottom-0 z-50 w-3/4 h-full bg-black">
      <DevNoteDetailModalHeader onClickExitButton={onClickExitButton} />
      <div className="px-16">{detail}</div>
      <DevNoteDetailModalCommentList />
      <CommentCreator />
    </div>
  );
}
