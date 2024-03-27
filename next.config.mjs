/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com", protocol: "https" },
      { hostname: "utfs.io", protocol: "https" },
      { hostname: "scontent-mty2-1.cdninstagram.com", protocol: "https" },
    ],
  },
};

export default nextConfig;
