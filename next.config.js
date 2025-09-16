/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // 👈 this enables static export

  images: {
    unoptimized: true, // 👈 needed for next/image in static export
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
