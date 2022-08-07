import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VitePWA } from "vite-plugin-pwa";
import compressPlugin from "vite-plugin-compression";
import Pages from "vite-plugin-pages";
import { resolve } from "path";
import Icons from "unplugin-icons/vite";
import checker from "vite-plugin-checker";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig({
  plugins: [
    compressPlugin({
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
    Pages({
      dirs: "src/views",
      importMode: "async",
    }),
    VitePWA(),
    vue(),
    checker({ vueTsc: true }),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

    process.env.PROXY === "MOCK" &&
      viteMockServe({
        // default
        mockPath: "mock",
        localEnabled: true,
      }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "."),
      // https://github.com/intlify/vue-i18n-next/issues/789#issuecomment-1138210323
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
    },
  },
});
