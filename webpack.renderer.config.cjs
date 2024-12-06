// webpack.renderer.config.cjs
const path = require('path');

module.exports = {
    entry: './src/preload/preload.ts', // Adjust if necessary
    target: 'electron-preload',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src/preload'),
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'preload.js',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
};
