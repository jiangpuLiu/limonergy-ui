import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      include: ['./**/*.ts'],
      exclude: ['./vite.config.ts'],
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'utils',
      fileName: (format) => `index.${format}.js`, // 输出文件名根据格式区分
      formats: ['es', 'cjs'], // 添加 CommonJS 格式
    },
    rollupOptions: {
      output: {
        exports: 'named', // 保持命名导出
      },
    },
  },
})
