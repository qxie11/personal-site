/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  webpack(config) {
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        modifyVars: {
          "@primary-color": "#b80929",
          "@error-color": "#b80929",
          "@body-background": "#ffffff",
          "@font-family": "Montserrat, 'Noto Sans', Arial, Helvetica, sans-serif",
          "line-height-base": "1.25",
          "@font-size-base": "1rem",
          "@text-color": "#1e1f1d",
          "@link-color": "#1e1f1d",
        },
      },
    ],
  ],
  nextConfig
);
