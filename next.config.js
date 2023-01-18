/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  async redirects() {
    return [
      //       {
      //         source: "/",
      //         destination: "https://codepen.io/chriscoyier/pen/AwVNjg",
      //         permanent: false,
      //       },
    ];
  },
};

module.exports = nextConfig;
