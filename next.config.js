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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // https://res.cloudinary.com/stephen1407/image/upload/v1709501393/iPhone-12-Mini-news-blog-website01.netlify.app_eolegx.png
        port: "",
        pathname: "/stephen1407/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
