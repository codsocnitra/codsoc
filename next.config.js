/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs.codsoc25.webnextpro.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  compress: true,
  experimental: {
    serverActions: {},
  },
};

module.exports = nextConfig;
