import { useState } from "react";
import CommentItem from "./CommentItem";
import CommentCreator from "./CommentCreator";

export default function DevNoteDetailModalCommentList() {
  const [selectedOption, setSelectedOption] = useState<"좋아요순" | "최신순">(
    "좋아요순"
  );
  const commentNum = 24;
  return (
    <div>
      <div className="px-16">
        <div className="flex">
          <p>{`댓글 ${commentNum.toString()}`}</p>

          <div className="flex">
            <button onClick={() => setSelectedOption("좋아요순")}>
              좋아요순
            </button>
            <button onClick={() => setSelectedOption("최신순")}>최신순</button>
          </div>
        </div>
        <hr />

        <CommentItem
          owner="펀잘알 매니저"
          createTime="3시간 전"
          detail="우와 잘만들었다"
          likeNum={3}
        />
      </div>
      <CommentCreator />
    </div>
  );

  // owner,
  // createTime,
  // detail,
  // likeNum,
}
