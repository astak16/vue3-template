import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import checker from "vite-plugin-checker";

const dist = "h5";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_BASE_URL,
    build: {
      outDir: resolve(__dirname, `../../dist/${dist}`),
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins: [
      vue(),
      vueJsx({
        transformOn: true,
        mergeProps: true,
      }),
      checker({
        vueTsc: true,
        typescript: true,
      }),
    ],
  };
});
