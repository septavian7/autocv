/* webpack.config.mjs */

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "." }, // Always include Static Files
        { from: "dev", to: "dev" }, // Always include /dev/ folder
      ],
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // Adjusted for environmental checks
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-source-map', // Adjusted for CSP compliance
  optimization: {
    minimize: process.env.NODE_ENV === 'production', // Ensures minimization only in production
    minimizer: [new TerserPlugin({
      // TerserPlugin options here, if needed for further customization
    })],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    port: 8080,
    allowedHosts: 'all',
  },
};