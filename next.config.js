/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "./src/styles/variables/allVariables.scss;
    @import ./src/styles/Home.module.scss;`,
  },
};

moduleexports = nextConfig;
