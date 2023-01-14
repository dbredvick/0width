/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://codepen.io/chriscoyier/pen/AwVNjg',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
