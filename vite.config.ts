import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {resolve} from "path";
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import {themePreprocessorPlugin} from "@zougt/vite-plugin-theme-preprocessor";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        hmr: true,
        open: true,
        proxy: {
            "/api": "http://10.10.188.43:11112"
        }
    },
    plugins: [
        vue(),
        themePreprocessorPlugin({
            scss: {
                multipleScopeVars: [
                    {
                        scopeName: "theme-default",
                        path: resolve(__dirname, "src/styles/theme/default-vars.scss")
                    },
                    {
                        scopeName: "theme-light",
                        path: resolve(__dirname, "src/styles/theme/light-vars.scss")
                    }
                ],
                defaultScopeName: "",
                extract: true,
                outputDir: "",
                themeLinkTagId: "head",
                themeLinkTagInjectTo: "head",
                removeCssScopeName: false,
                customThemeCssFileName: (scopeName: string) => scopeName
            }
        }),
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
