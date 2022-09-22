/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/jutel",
        destination:
          "https://cheersshop.com.br/evento/jutel-no-multiverso-da-loucura-3646",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
