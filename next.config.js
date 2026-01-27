/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  logging: {
    warnings: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.86",
        port: "3000",
        pathname: "/storage/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/storage/**",
      },

      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
