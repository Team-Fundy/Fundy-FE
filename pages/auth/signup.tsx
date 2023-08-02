import dynamic from "next/dynamic"
import { useState } from "react";
import CompleteSignUpComponent from "@/Components/Auth/CompleteSignUpComponent";
const SignUpComponent = dynamic(() => import("@/Components/Auth/SignUpComponent"), { ssr: false });

export default function Home() {

    const [visibleCompleteSignup, setVisibleCompleteSignup] = useState(false);

    return (
        <div className="bg-slate-100">
            {visibleCompleteSignup ? <CompleteSignUpComponent /> : <SignUpComponent setVisibleCompleteSignup={setVisibleCompleteSignup} />}
        </div>
    )
}
