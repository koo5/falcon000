//import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(
      {
        runtime: "nodejs18.x"

      }),
    alias: {
      $components: "src/components",
      $lib: "src/components",
      $routes: "src/routes",
    },
  },
}

export default config
