/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/user/sign-up',
        destination: 'http://localhost:8080/api/user/sign-up',
      },
    ];
  },
}

module.exports = nextConfig
