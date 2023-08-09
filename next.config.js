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
    ];
  },
}

module.exports = nextConfig
