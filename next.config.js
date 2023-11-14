/** @type {import('next').NextConfig} */
const DELTA_SHARING_SERVER_URL = process.env.DELTA_SHARING_SERVER_IP_ADDR;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        //	source: '/api/catalog/:path*',
        source: '/api/sharing/:path*',
        //	destination: `${DELTA_SHARING_SERVER_IP_ADDR}/catalog/:path*`,
        destination: `${DELTA_SHARING_SERVER_URL}/sharing/:path*`,
      },
    ]
  },
};

module.exports = nextConfig;
