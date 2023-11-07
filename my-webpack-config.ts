import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

export const config: Configuration = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.esbuildMinify,
        terserOptions: {
          minify: false,
          minifyWhitespace: true,
          minifyIdentifiers: false,
          minifySyntax: true,
        },
      })
    ]
  }
}