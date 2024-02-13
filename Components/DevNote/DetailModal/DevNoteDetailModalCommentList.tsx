import { useState } from "react";

export default function DevNoteDetailModalCommentList() {
  const [selectedOption, setSelectedOption] = useState<"좋아요순" | "최신순">(
    "좋아요순"
  );
  const commentNum = 24;
  return (
    <div className="flex">
      <p>{`댓글 ${commentNum.toString()}`}</p>

      <div className="flex">
        <button onClick={() => setSelectedOption("좋아요순")}>좋아요순</button>
        <button onClick={() => setSelectedOption("최신순")}>최신순</button>
      </div>
      <hr />
    </div>
  );
}
