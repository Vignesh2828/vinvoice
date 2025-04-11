/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [
            "puppeteer-core",
            "@sparticuz/chromium-min", // Add this
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.map$/,
            use: "ignore-loader",
        });
        
        // Important for Puppeteer in serverless environment
        config.externals = [...config.externals, 
            { 'utf-8-validate': 'commonjs utf-8-validate', 
              'bufferutil': 'commonjs bufferutil' 
            }
        ];
        
        return config;
    },
    // Enable serverless mode (recommended for Vercel)
    output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
};

// Bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);