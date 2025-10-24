import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ProvidePlugin } from '@rspack/core';

const { publicVars } = loadEnv({ prefixes: ['WEB3AUTH_'] });

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    define: {
      'process.env': '{}',
      ...publicVars,
    },
  },
  tools: {
    rspack: {
      resolve: {
        fallback: {
          buffer: require.resolve('buffer'),
          process: require.resolve('process/browser'),
          '@react-native-async-storage/async-storage': false,
        },
      },
      plugins: [
        new ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        }),
      ],
    },
  },
});
