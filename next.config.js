/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs.sasstech.webnextpro.com",
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
