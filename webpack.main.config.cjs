// webpack.main.config.cjs
const path = require('path');

module.exports = {
    entry: './src/main/main.ts', // Correct entry point
    target: 'electron-main',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src/main'),
                    path.resolve(__dirname, 'src/server'),
                    path.resolve(__dirname, 'src/preload'),
                    // path.resolve(__dirname, 'src/server/config'),
                    // path.resolve(__dirname, 'src/server/controllers'),
                    // path.resolve(__dirname, 'src/server/middlewares'),
                    // path.resolve(__dirname, 'src/server/models'),
                    // path.resolve(__dirname, 'src/server/routes'),
                    // path.resolve(__dirname, 'src/server/services'),
                    // path.resolve(__dirname, 'src/server/utils'),
                ],
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
};
