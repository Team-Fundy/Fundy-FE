import dynamic from "next/dynamic"
const SignUpComponent = dynamic(() => import("@/Components/Auth/SignUpComponent"), { ssr: false });

export default function Home() {
    return (
        <div className="bg-slate-100">
            <SignUpComponent />
        </div>
    )
}
