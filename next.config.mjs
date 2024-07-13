/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: {
      bodySizeLimit: "6mb",
    },
  },
};

export default nextConfig;
