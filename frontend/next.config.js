/** @type {import('next').NextConfig} */
const DELTA_SHARING_BASE_URL = process.env.DELTA_SHARING_BASE_URL;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        //	source: '/api/catalog/:path*',
        source: "/api/sharing/:path*",
        //	destination: `${DELTA_SHARING_BASE_URL}/catalog/:path*`,
        destination: `${DELTA_SHARING_BASE_URL}/sharing/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
