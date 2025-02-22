import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import adapter from '@hono/vite-dev-server/cloudflare';
import { getLoadContext } from './load-context';

import serverAdapter from 'hono-react-router-adapter/vite';

export default defineConfig((_) => ({
  plugins: [
    tailwindcss(),
    reactRouter(),
    serverAdapter({
      adapter,
      entry: './server/index.ts',
      getLoadContext
    }),
    tsconfigPaths()
  ],
  ssr: {
    resolve: {
      externalConditions: ['workerd', 'worker']
    }
  }
}));
