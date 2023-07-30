import LoginCompoent from "@/Components/Auth/LoginComponent"
import { useSession } from "next-auth/react"

export function temp() {
    const { data: session, status } = useSession();
    if (session) {
    }
    else{

    }
}


export default function Login() {
    return (
        <div className="bg-slate-100">
            <LoginCompoent />
        </div>
    )
}
