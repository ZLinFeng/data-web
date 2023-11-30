import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {resolve} from "path";
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        hmr: true,
        open: true,
    },
    plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), "src/assets/icons")],
            symbolId: "icon-[name]",
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver({importStyle: "sass"})],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/index.scss" as *;`
            }
        }
    }
})
