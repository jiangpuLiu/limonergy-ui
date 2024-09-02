import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {compression} from 'vite-plugin-compression2'
import shell from 'shelljs'
import {defer, delay} from "lodash-es";
import hooks from './hooksPlugin.ts'
import terser from "@rollup/plugin-terser";
import {visualizer} from "rollup-plugin-visualizer";
import {readFile} from "node:fs";

const TRY_MOVE_STYLES_DELAY = 800 as const
// 环境
const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

function moveStyle() {
    readFile("./dist/umd/index.css.gz", (err) => {
        if (err) return delay(moveStyle, TRY_MOVE_STYLES_DELAY);
        defer(() => shell.cp("./dist/umd/index.css", "./dist/index.css"));
    });
}

export default defineConfig({
    plugins: [
        vue(),
        visualizer({
            filename: "dist/stats.umd.html"
        }),
        compression({include:  /.(cjs|css)$/i}),
        terser({
            compress: {
                drop_console: ['log'],
                drop_debugger: true,
                passes: 3,
                global_defs: {
                    "@DEV": JSON.stringify(isDev), // 定义全局变量 `@DEV`，表示是否为开发环境
                    "@PROD": JSON.stringify(isProd), // 定义全局变量 `@PROD`，表示是否为生产环境
                    "@TEST": JSON.stringify(isTest), // 定义全局变量 `@TEST`，表示是否为测试环境
                }
            }
        }),
        hooks({
            rmFiles:['./dist/umd/', './dist/index.css'],
            afterBuild: moveStyle,
        })

    ],
    build: {
        outDir: 'dist/umd',
        lib: {
            entry: resolve(__dirname, '../index.ts'),
            name: 'LimonengryUi',
            fileName: 'index',
            formats: ['umd']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'index.css'
                    return assetInfo.name as string
                }
            }
        }
    }
})