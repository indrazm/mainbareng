/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "pub-030c44170f76454a961c419019a7b038.r2.dev",
        port: "",
        protocol: "https",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
