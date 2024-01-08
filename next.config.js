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
    ],
  },
};

module.exports = nextConfig;
