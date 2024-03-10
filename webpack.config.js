/* webpack.config.mjs */

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import CopyPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "public", to: "." }, // Static Files
          ],
        }),
      ],
  mode: "development", // 'production' for production builds
  entry: "./src/index.tsx", // Entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
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
};
