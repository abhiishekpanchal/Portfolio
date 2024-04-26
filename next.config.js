const nextConfig = {
    env: {
        TEMPLATE_ID : process.env.TEMPLATE_ID,
        SERVICE_ID : process.env.SERVICE_ID,
        PUBLIC_KEY : process.env.PUBLIC_KEY,
    },
    webpack: (config, { isServer }) => {
        // Add webpack configurations here
        config.module.rules.push({
            test: /\.(pdf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/assets/', // Output path for the PDF files relative to the public directory
                        publicPath: '/_next/', // Public path to serve the files from
                    },
                },
            ],
        });
        return config;
    },
};

module.exports = nextConfig;
