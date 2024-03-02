// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stephen-adeniji.netlify.app",
        // https://stephen-adeniji.vercel.app/
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // https://res.cloudinary.com/dbiegrtmj/image/upload/v1709422259/Screenshot_2024-03-03_002412_jd2fv6.png
        port: "",
        pathname: "/dbiegrtmj/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
