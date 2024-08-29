import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'
import {readdirSync} from "fs";
import {filter, delay, map} from "lodash-es";
import shell from "shelljs";
import hooks from "./hooksPlugin.ts";

function getDirectoresSync(basePath: string) {
    const entries = readdirSync(basePath, {withFileTypes: true})
    return map(
        filter(entries, entry => entry.isDirectory()),
        entry => entry.name
    )
}

const TRY_MOVE_STYLES_DELAY = 800 as const
function moveStyle() {
    try {
        readdirSync('./dist/es/theme')
        shell.mv('./dist/es/theme', './dist')
    }catch (e) {
        delay(moveStyle, TRY_MOVE_STYLES_DELAY)
    }
}

export default defineConfig({
    plugins: [
        vue(),
        dts({
        tsconfigPath: "../../tsconfig.build.json",
        outDir: 'dist/types',
    }),
        hooks({
            rmFiles: ['./dist/es', './dist/theme', './dist/types'],
            afterBuild: moveStyle
        })
    ],
    build: {
        outDir: 'dist/es',
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: 'LimonengryUi',
            fileName: 'index',
            formats: ['es']
        },
        rollupOptions: {
            external: [
                'vue',
                "@fortawesome/fontawesome-svg-core",
                "@fortawesome/free-solid-svg-icons",
                "@fortawesome/vue-fontawesome",
                "@popperjs/core",
                "async-validator",
            ],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'index.css'
                    if (
                        assetInfo.type === "asset" &&
                        /\.(css)$/i.test(assetInfo.name as string)
                    ) {
                        return "theme/[name].[ext]";
                    }
                    return assetInfo.name as string
                },
                // 分包处理
                manualChunks(id) {
                    // 第三方包处理
                    if(id.includes('node_modules')) {
                        return "vendor"
                    }
                    if(id.includes("/packages/hooks")){
                        return 'hooks'
                    }
                    if(id.includes("/packages/utils")){
                        return 'utils'
                    }

                    // 根据组件名称分包
                    for (const name of getDirectoresSync("../components")) {
                        if (id.includes(`packages/components/${name}`)) return name
                    }
                }
            }
        }
    }
})