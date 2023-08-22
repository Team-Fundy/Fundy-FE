/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/user/sign-up',
        destination: 'http://localhost:8080/api/user/sign-up',
      },
      {
        source: '/api/user/email/verify',
        destination: 'http://localhost:8080/api/user/email/verify',
      },
      {
        source: '/api/user/email/code',
        destination: 'http://localhost:8080/api/user/email/code',
      },
      {
        source: '/api/user/login',
        destination: 'http://localhost:8080/api/user/login',
      },
      {
        source: '/api/user/check-nickname',
        destination: 'http://localhost:8080/api/user/check-nickname',
      },
      {
        source: '/api/user/info',
        destination: 'http://localhost:8080/api/user/info',
      },
      {
        source: '/api/user/oauth2/login/google',
        destination: 'http://localhost:8080/api/user/oauth2/login/google',
      },


    ];
  },
  async redirects() {
    return [
      {
        source: "/content",
        destination: "https://itprogramming119.tistory.com/entry/Next-redirects%EB%A1%9C-%EA%B2%BD%EB%A1%9C-%EB%B3%80%EA%B2%BD%ED%95%B4%EC%84%9C-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
