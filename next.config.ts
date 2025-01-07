/** @type {import('next').NextConfig} */
import { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Cache riv files in the public folder
        source: "/:all*(riv)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000",
          },
        ],
      },
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.wasm$/,
      use: [
        {
          loader: "url-loader",
        },
      ],
    });

    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
