import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { readdirSync, readdir } from 'fs'
import { filter, delay, map, defer } from 'lodash-es'
import shell from 'shelljs'
import terser from '@rollup/plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import { hooksPlugin as hooks } from '@limonergy-ui/vite-plugins'

const TRY_MOVE_STYLES_DELAY = 800 as const
// 环境
const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

function getDirectoresSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true })
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name,
  )
}

// 移动样式文件，更改打包后dist目录结构
function moveStyle() {
  readdir('./dist/es/theme', (err) => {
    if (err) return delay(moveStyle, TRY_MOVE_STYLES_DELAY)
    defer(() => shell.mv('./dist/es/theme', './dist'))
  })
}

export default defineConfig({
  plugins: [
    vue(),
    // 生成可视化打包结构文件
    visualizer({
      filename: 'dist/stats.es.html',
    }),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }),
    // 根据打包钩子控制打包前和打包后的目录结构处理
    hooks({
      rmFiles: ['./dist/es', './dist/theme', './dist/types'],
      afterBuild: moveStyle,
    }),
    terser({
      // 压缩选项
      compress: {
        sequences: isProd, // 是否启用连续声明压缩，仅在生产环境下启用
        arguments: isProd, // 是否启用函数参数压缩，仅在生产环境下启用
        drop_debugger: isProd, // 是否删除 `debugger` 语句，仅在生产环境下启用
        drop_console: isProd && ['log'], // 是否删除 `console.log` 语句，仅在生产环境下启用
        passes: isProd ? 4 : 1, // 压缩的轮数，生产环境下为4轮，开发环境下为1轮
        global_defs: {
          '@DEV': JSON.stringify(isDev), // 定义全局变量 `@DEV`，表示是否为开发环境
          '@PROD': JSON.stringify(isProd), // 定义全局变量 `@PROD`，表示是否为生产环境
          '@TEST': JSON.stringify(isTest), // 定义全局变量 `@TEST`，表示是否为测试环境
        },
      },
      // 格式化选项
      format: {
        semicolons: false, // 是否使用分号，设置为 `false` 以避免分号导致的错误
        shorthand: isProd, // 是否启用属性简写，仅在生产环境下启用
        braces: !isProd, // 是否使用大括号，仅在开发环境下使用
        beautify: !isProd, // 是否美化代码，仅在开发环境下启用
        comments: !isProd, // 是否保留注释，仅在开发环境下保留
      },
      // 混淆相关
      mangle: {
        toplevel: isProd, // 是否混淆顶级作用域变量，仅在生产环境下启用
        eval: isProd, // 是否混淆 `eval` 语句，仅在生产环境下启用
        keep_classnames: isDev, // 是否保留类名，仅在开发环境下保留
        keep_fnames: isDev, // 是否保留函数名，仅在开发环境下保留
      },
    }),
  ],
  build: {
    outDir: 'dist/es',

    // 混淆默认terser, 关闭在plugins中配置
    minify: false,

    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, '../index.ts'),
      name: 'LimonengryUi',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator',
      ],
      output: {
        // 样式打包处理，方便后期可以按需引入
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          if (
            assetInfo.type === 'asset' &&
            /\.(css)$/i.test(assetInfo.name as string)
          ) {
            return 'theme/[name].[ext]'
          }
          return assetInfo.name as string
        },
        // 分包处理
        manualChunks(id) {
          // 第三方包处理
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          if (
            id.includes('/packages/utils') ||
            id.includes('plugin-vue:export-helper')
          ) {
            return 'utils'
          }

          // 根据组件名称分包
          for (const name of getDirectoresSync('../components')) {
            if (id.includes(`packages/components/${name}`)) return name
          }
        },
      },
    },
  },
})
