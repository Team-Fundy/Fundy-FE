import Link from 'next/link'
import Image from 'next/image'
import fundyicon from '../public/home/fundyicon.png'
import frame from '../public/home/frame.png'

export default function Header() {
    return (
        <header className="w-full h-16 bg-slate-100 flex justify-between">
            <Link className="gap-2" href="/">
                <Image src={fundyicon} alt="logo" />
            </Link>
            <div className="h-12">
                <Image src={frame}
                    alt="none"
                    width={300}
                    height="30" />
            </div>
            <div className="flex gap-4">

                <Link href="/auth/login">
                    <p className="font-['dalmoori']">회원가입</p>
                </Link>
                <Link href="/auth/login">
                    <p className="font-['dalmoori']">로그인</p>
                </Link>
                <Link href="/auth/login">
                    <p className="font-['dalmoori']">프로젝트만들기</p>
                </Link>
            </div>

        </header >
    )
}   