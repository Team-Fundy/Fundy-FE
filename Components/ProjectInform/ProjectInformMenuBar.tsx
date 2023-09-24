export default function ProjectinformMenuBar() {
    return (
        <div>
            <div className="border-t-8 w-full h-24 border-slate-200 flex gap-48 place-content-center">
                <button>개발노트</button>
            </div>
            <div className="border-8 w-full h-24 border-slate-200 flex gap-48 place-content-center">
                <button>소개</button>
                <button>예산</button>
                <button>일정</button>
                <button>팀소개</button>
                <button>문의 및 정책</button>
            </div>
        </div>
    )
}