/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs.CodSoc'25.webnextpro.com",
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
