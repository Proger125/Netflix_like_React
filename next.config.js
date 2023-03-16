/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search?genre=All&sortBy=release_date',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
