import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // 로그인 폼에 표시될 이름 (예: "이메일로 로그인")
            id: "email-password-credential",
            name: "Credentials",
            // 로그인 폼에서 받을 인증 정보 필드들을 지정합니다.
            // 예: 이메일, 비밀번호, 2단계 인증 토큰 등
            // <input> 태그에 사용할 HTML 속성들을 지정할 수 있습니다.
            credentials: {
                email: { label: "이메일", type: "email", placeholder: "jsmith" },
                password: { label: "비밀번호", type: "password" },
            },
            async authorize(credentials, req) {
                console.log("*");

                const res = await fetch("http://localhost:8080/api/user/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: { "Content-Type": "application/json" },
                });

                if (res.ok) {
                    return credentials;
                } else {
                    // 로그인 실패 시 null을 반환합니다.

                }
            },
        }),
    ],
});
