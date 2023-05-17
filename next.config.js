/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/miraden-next-ts",
};

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    nextConfig,
  },
};
