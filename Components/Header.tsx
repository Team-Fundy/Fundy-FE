import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full h-16 bg-blue-300 flex justify-between">
            <button>로고</button>
            <div className="">
                <button>회원가입</button>
                <Link href="/auth/login">
                    <button>로그인</button>
                </Link>
                <button>프로젝트만들기</button>
            </div>

        </header>
    )
} 