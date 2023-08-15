import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import jwt from 'jsonwebtoken';
import { NextApiHandler } from 'next';
import axios from 'axios';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
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
                // const res = await axios.post(
                //     'http://localhost:8080/api/user/login',
                //     {
                //         username: credentials?.email,
                //         password: credentials?.password,
                //     }
                // );
                const res = await fetch("http://localhost:8080/api/user/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: { "Content-Type": "application/json" },
                });
                // if (res.status === 200) {
                //     const { access_token, refresh_token } = res.data;
                //     // You can decode the access_token to get user information if needed
                //     const decodedToken = jwt.decode(access_token);
                //     return {
                //         // Return user object or relevant data
                //         id: decodedToken.id,
                //         access_token,
                //         refresh_token,
                //     };
                // } else {
                //     return null;
                // }

                if (res.ok) {
                    return credentials;
                } else {
                    // 로그인 실패 시 null을 반환합니다.

                }
            },

            // Add other NextAuth.js options as needed
        }),

    ],
});
