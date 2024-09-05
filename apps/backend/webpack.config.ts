import type { Configuration } from 'webpack';

import { merge } from 'webpack-merge';
import { composePlugins, withNx } from '@nx/webpack';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PugPlugin = require('pug-plugin');

module.exports = composePlugins(withNx(), (config: Configuration) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  if (config.optimization) {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false,
            keep_classnames: true,
          },
        }),
      ],
      concatenateModules: true,
    };
  }

  return merge(config, {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: './prisma/schema.prisma',
            to: '.',
            noErrorOnMissing: false,
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: PugPlugin.loader,
          options: {
            method: 'compile', // default method `compile` can be omitted
          },
        },
      ],
    },
  });
});
