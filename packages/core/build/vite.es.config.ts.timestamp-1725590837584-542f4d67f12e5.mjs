// build/vite.es.config.ts
import { defineConfig } from "file:///Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/node_modules/.pnpm/vite@5.4.3_@types+node@20.16.5_terser@5.31.6/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.1.3_vite@5.4.3_@types+node@20.16.5_terser@5.31.6__vue@3.5.1_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.16.5_rollup@4.21.2_typescript@5.5.4_vite@5.4.3_@types+node@20.16.5_terser@5.31.6_/node_modules/vite-plugin-dts/dist/index.mjs";
import { readdirSync, readdir } from "fs";
import { filter, delay, map, defer } from "file:///Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import shell from "file:///Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";
import terser from "file:///Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.21.2/node_modules/@rollup/plugin-terser/dist/es/index.js";
import { visualizer } from "file:///Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.21.2/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { hooksPlugin as hooks } from "file:///Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/libs/vite-plugins/.dist/index.js";
var __vite_injected_original_dirname = "/Users/mac/Desktop/ProjectCode/NpmProject/limonergy-ui/packages/core/build";
var TRY_MOVE_STYLES_DELAY = 800;
var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";
var isTest = process.env.NODE_ENV === "test";
function getDirectoresSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
function moveStyle() {
  readdir("./dist/es/theme", (err) => {
    if (err) return delay(moveStyle, TRY_MOVE_STYLES_DELAY);
    defer(() => shell.mv("./dist/es/theme", "./dist"));
  });
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: "dist/stats.es.html"
    }),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    }),
    hooks({
      rmFiles: ["./dist/es", "./dist/theme", "./dist/types"],
      afterBuild: moveStyle
    }),
    terser({
      // 压缩选项
      compress: {
        sequences: isProd,
        // 是否启用连续声明压缩，仅在生产环境下启用
        arguments: isProd,
        // 是否启用函数参数压缩，仅在生产环境下启用
        drop_debugger: isProd,
        // 是否删除 `debugger` 语句，仅在生产环境下启用
        drop_console: isProd && ["log"],
        // 是否删除 `console.log` 语句，仅在生产环境下启用
        passes: isProd ? 4 : 1,
        // 压缩的轮数，生产环境下为4轮，开发环境下为1轮
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          // 定义全局变量 `@DEV`，表示是否为开发环境
          "@PROD": JSON.stringify(isProd),
          // 定义全局变量 `@PROD`，表示是否为生产环境
          "@TEST": JSON.stringify(isTest)
          // 定义全局变量 `@TEST`，表示是否为测试环境
        }
      },
      // 格式化选项
      format: {
        semicolons: false,
        // 是否使用分号，设置为 `false` 以避免分号导致的错误
        shorthand: isProd,
        // 是否启用属性简写，仅在生产环境下启用
        braces: !isProd,
        // 是否使用大括号，仅在开发环境下使用
        beautify: !isProd,
        // 是否美化代码，仅在开发环境下启用
        comments: !isProd
        // 是否保留注释，仅在开发环境下保留
      },
      // 混淆相关
      mangle: {
        toplevel: isProd,
        // 是否混淆顶级作用域变量，仅在生产环境下启用
        eval: isProd,
        // 是否混淆 `eval` 语句，仅在生产环境下启用
        keep_classnames: isDev,
        // 是否保留类名，仅在开发环境下保留
        keep_fnames: isDev
        // 是否保留函数名，仅在开发环境下保留
      }
    })
  ],
  build: {
    outDir: "dist/es",
    // 混淆默认terser, 关闭在plugins中配置
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "../index.ts"),
      name: "LimonengryUi",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          if (assetInfo.type === "asset" && /\.(css)$/i.test(assetInfo.name)) {
            return "theme/[name].[ext]";
          }
          return assetInfo.name;
        },
        // 分包处理
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils") || id.includes("plugin-vue:export-helper")) {
            return "utils";
          }
          for (const name of getDirectoresSync("../components")) {
            if (id.includes(`packages/components/${name}`)) return name;
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQvdml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdENvZGUvTnBtUHJvamVjdC9saW1vbmVyZ3ktdWkvcGFja2FnZXMvY29yZS9idWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RDb2RlL05wbVByb2plY3QvbGltb25lcmd5LXVpL3BhY2thZ2VzL2NvcmUvYnVpbGQvdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RDb2RlL05wbVByb2plY3QvbGltb25lcmd5LXVpL3BhY2thZ2VzL2NvcmUvYnVpbGQvdml0ZS5lcy5jb25maWcudHNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tICdwYXRoJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQge3JlYWRkaXJTeW5jLCByZWFkZGlyfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7ZmlsdGVyLCBkZWxheSwgbWFwLCBkZWZlcn0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHNoZWxsIGZyb20gXCJzaGVsbGpzXCI7XG5pbXBvcnQgdGVyc2VyIGZyb20gXCJAcm9sbHVwL3BsdWdpbi10ZXJzZXJcIjtcbmltcG9ydCB7dmlzdWFsaXplcn0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuaW1wb3J0IHsgaG9va3NQbHVnaW4gYXMgaG9va3MgfSBmcm9tIFwiQGxpbW9uZXJneS11aS92aXRlLXBsdWdpbnNcIlxuXG5jb25zdCBUUllfTU9WRV9TVFlMRVNfREVMQVkgPSA4MDAgYXMgY29uc3Rcbi8vIFx1NzNBRlx1NTg4M1xuY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuY29uc3QgaXNUZXN0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0J1xuXG5cbmZ1bmN0aW9uIGdldERpcmVjdG9yZXNTeW5jKGJhc2VQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gcmVhZGRpclN5bmMoYmFzZVBhdGgsIHt3aXRoRmlsZVR5cGVzOiB0cnVlfSlcbiAgICByZXR1cm4gbWFwKFxuICAgICAgICBmaWx0ZXIoZW50cmllcywgZW50cnkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSksXG4gICAgICAgIGVudHJ5ID0+IGVudHJ5Lm5hbWVcbiAgICApXG59XG5cbmZ1bmN0aW9uIG1vdmVTdHlsZSgpIHtcbiAgICByZWFkZGlyKCcuL2Rpc3QvZXMvdGhlbWUnLCBlcnIgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gZGVsYXkobW92ZVN0eWxlLCBUUllfTU9WRV9TVFlMRVNfREVMQVkpXG4gICAgICAgIGRlZmVyKCgpID0+IHNoZWxsLm12KCcuL2Rpc3QvZXMvdGhlbWUnLCAnLi9kaXN0JykpXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHZ1ZSgpLFxuICAgICAgICB2aXN1YWxpemVyKHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiBcImRpc3Qvc3RhdHMuZXMuaHRtbFwiXG4gICAgICAgIH0pLFxuICAgICAgICBkdHMoe1xuICAgICAgICAgICAgdHNjb25maWdQYXRoOiBcIi4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcbiAgICAgICAgICAgIG91dERpcjogJ2Rpc3QvdHlwZXMnLFxuICAgICAgICB9KSxcbiAgICAgICAgaG9va3Moe1xuICAgICAgICAgICAgcm1GaWxlczogWycuL2Rpc3QvZXMnLCAnLi9kaXN0L3RoZW1lJywgJy4vZGlzdC90eXBlcyddLFxuICAgICAgICAgICAgYWZ0ZXJCdWlsZDogbW92ZVN0eWxlXG4gICAgICAgIH0pLFxuICAgICAgICB0ZXJzZXIoe1xuICAgICAgICAgICAgLy8gXHU1MzhCXHU3RjI5XHU5MDA5XHU5ODc5XG4gICAgICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgICAgICAgIHNlcXVlbmNlczogaXNQcm9kLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdThGREVcdTdFRURcdTU4RjBcdTY2MEVcdTUzOEJcdTdGMjlcdUZGMENcdTRFQzVcdTU3MjhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTRFMEJcdTU0MkZcdTc1MjhcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGlzUHJvZCwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU1MUZEXHU2NTcwXHU1M0MyXHU2NTcwXHU1MzhCXHU3RjI5XHVGRjBDXHU0RUM1XHU1NzI4XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU0RTBCXHU1NDJGXHU3NTI4XG4gICAgICAgICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogaXNQcm9kLCAvLyBcdTY2MkZcdTU0MjZcdTUyMjBcdTk2NjQgYGRlYnVnZ2VyYCBcdThCRURcdTUzRTVcdUZGMENcdTRFQzVcdTU3MjhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTRFMEJcdTU0MkZcdTc1MjhcbiAgICAgICAgICAgICAgICBkcm9wX2NvbnNvbGU6IGlzUHJvZCAmJiBbJ2xvZyddLCAvLyBcdTY2MkZcdTU0MjZcdTUyMjBcdTk2NjQgYGNvbnNvbGUubG9nYCBcdThCRURcdTUzRTVcdUZGMENcdTRFQzVcdTU3MjhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTRFMEJcdTU0MkZcdTc1MjhcbiAgICAgICAgICAgICAgICBwYXNzZXM6IGlzUHJvZCA/IDQgOiAxLCAvLyBcdTUzOEJcdTdGMjlcdTc2ODRcdThGNkVcdTY1NzBcdUZGMENcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTRFMEJcdTRFM0E0XHU4RjZFXHVGRjBDXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU0RTBCXHU0RTNBMVx1OEY2RVxuICAgICAgICAgICAgICAgIGdsb2JhbF9kZWZzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQERFVlwiOiBKU09OLnN0cmluZ2lmeShpc0RldiksIC8vIFx1NUI5QVx1NEU0OVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRiBgQERFVmBcdUZGMENcdTg4NjhcdTc5M0FcdTY2MkZcdTU0MjZcdTRFM0FcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcbiAgICAgICAgICAgICAgICAgICAgXCJAUFJPRFwiOiBKU09OLnN0cmluZ2lmeShpc1Byb2QpLCAvLyBcdTVCOUFcdTRFNDlcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0YgYEBQUk9EYFx1RkYwQ1x1ODg2OFx1NzkzQVx1NjYyRlx1NTQyNlx1NEUzQVx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1xuICAgICAgICAgICAgICAgICAgICBcIkBURVNUXCI6IEpTT04uc3RyaW5naWZ5KGlzVGVzdCksIC8vIFx1NUI5QVx1NEU0OVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRiBgQFRFU1RgXHVGRjBDXHU4ODY4XHU3OTNBXHU2NjJGXHU1NDI2XHU0RTNBXHU2RDRCXHU4QkQ1XHU3M0FGXHU1ODgzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFx1NjgzQ1x1NUYwRlx1NTMxNlx1OTAwOVx1OTg3OVxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgc2VtaWNvbG9uczogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NEY3Rlx1NzUyOFx1NTIwNlx1NTNGN1x1RkYwQ1x1OEJCRVx1N0Y2RVx1NEUzQSBgZmFsc2VgIFx1NEVFNVx1OTA3Rlx1NTE0RFx1NTIwNlx1NTNGN1x1NUJGQ1x1ODFGNFx1NzY4NFx1OTUxOVx1OEJFRlxuICAgICAgICAgICAgICAgIHNob3J0aGFuZDogaXNQcm9kLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTVDNUVcdTYwMjdcdTdCODBcdTUxOTlcdUZGMENcdTRFQzVcdTU3MjhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTRFMEJcdTU0MkZcdTc1MjhcbiAgICAgICAgICAgICAgICBicmFjZXM6ICFpc1Byb2QsIC8vIFx1NjYyRlx1NTQyNlx1NEY3Rlx1NzUyOFx1NTkyN1x1NjJFQ1x1NTNGN1x1RkYwQ1x1NEVDNVx1NTcyOFx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1x1NEUwQlx1NEY3Rlx1NzUyOFxuICAgICAgICAgICAgICAgIGJlYXV0aWZ5OiAhaXNQcm9kLCAvLyBcdTY2MkZcdTU0MjZcdTdGOEVcdTUzMTZcdTRFRTNcdTc4MDFcdUZGMENcdTRFQzVcdTU3MjhcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTRFMEJcdTU0MkZcdTc1MjhcbiAgICAgICAgICAgICAgICBjb21tZW50czogIWlzUHJvZCwgLy8gXHU2NjJGXHU1NDI2XHU0RkREXHU3NTU5XHU2Q0U4XHU5MUNBXHVGRjBDXHU0RUM1XHU1NzI4XHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU0RTBCXHU0RkREXHU3NTU5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gXHU2REY3XHU2REM2XHU3NkY4XHU1MTczXG4gICAgICAgICAgICBtYW5nbGU6IHtcbiAgICAgICAgICAgICAgICB0b3BsZXZlbDogaXNQcm9kLCAvLyBcdTY2MkZcdTU0MjZcdTZERjdcdTZEQzZcdTk4NzZcdTdFQTdcdTRGNUNcdTc1MjhcdTU3REZcdTUzRDhcdTkxQ0ZcdUZGMENcdTRFQzVcdTU3MjhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTRFMEJcdTU0MkZcdTc1MjhcbiAgICAgICAgICAgICAgICBldmFsOiBpc1Byb2QsIC8vIFx1NjYyRlx1NTQyNlx1NkRGN1x1NkRDNiBgZXZhbGAgXHU4QkVEXHU1M0U1XHVGRjBDXHU0RUM1XHU1NzI4XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU0RTBCXHU1NDJGXHU3NTI4XG4gICAgICAgICAgICAgICAga2VlcF9jbGFzc25hbWVzOiBpc0RldiwgLy8gXHU2NjJGXHU1NDI2XHU0RkREXHU3NTU5XHU3QzdCXHU1NDBEXHVGRjBDXHU0RUM1XHU1NzI4XHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU0RTBCXHU0RkREXHU3NTU5XG4gICAgICAgICAgICAgICAga2VlcF9mbmFtZXM6IGlzRGV2LCAvLyBcdTY2MkZcdTU0MjZcdTRGRERcdTc1NTlcdTUxRkRcdTY1NzBcdTU0MERcdUZGMENcdTRFQzVcdTU3MjhcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTRFMEJcdTRGRERcdTc1NTlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIG91dERpcjogJ2Rpc3QvZXMnLFxuXG4gICAgICAgIC8vIFx1NkRGN1x1NkRDNlx1OUVEOFx1OEJBNHRlcnNlciwgXHU1MTczXHU5NUVEXHU1NzI4cGx1Z2luc1x1NEUyRFx1OTE0RFx1N0Y2RVxuICAgICAgICBtaW5pZnk6IGZhbHNlLFxuXG4gICAgICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9pbmRleC50cycpLFxuICAgICAgICAgICAgbmFtZTogJ0xpbW9uZW5ncnlVaScsXG4gICAgICAgICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnXVxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogW1xuICAgICAgICAgICAgICAgICd2dWUnLFxuICAgICAgICAgICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIsXG4gICAgICAgICAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIixcbiAgICAgICAgICAgICAgICBcIkBmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWVcIixcbiAgICAgICAgICAgICAgICBcIkBwb3BwZXJqcy9jb3JlXCIsXG4gICAgICAgICAgICAgICAgXCJhc3luYy12YWxpZGF0b3JcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdzdHlsZS5jc3MnKSByZXR1cm4gJ2luZGV4LmNzcydcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJbmZvLnR5cGUgPT09IFwiYXNzZXRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgL1xcLihjc3MpJC9pLnRlc3QoYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRoZW1lL1tuYW1lXS5bZXh0XVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZSBhcyBzdHJpbmdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIFx1NTIwNlx1NTMwNVx1NTkwNFx1NzQwNlxuICAgICAgICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBcdTdCMkNcdTRFMDlcdTY1QjlcdTUzMDVcdTU5MDRcdTc0MDZcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidmVuZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCIvcGFja2FnZXMvaG9va3NcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnaG9va3MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwiL3BhY2thZ2VzL3V0aWxzXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBpZC5pbmNsdWRlcyhcInBsdWdpbi12dWU6ZXhwb3J0LWhlbHBlclwiKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndXRpbHMnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBcdTY4MzlcdTYzNkVcdTdFQzRcdTRFRjZcdTU0MERcdTc5RjBcdTUyMDZcdTUzMDVcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGdldERpcmVjdG9yZXNTeW5jKFwiLi4vY29tcG9uZW50c1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKGBwYWNrYWdlcy9jb21wb25lbnRzLyR7bmFtZX1gKSkgcmV0dXJuIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1osU0FBUSxvQkFBbUI7QUFDamIsT0FBTyxTQUFTO0FBQ2hCLFNBQVEsZUFBYztBQUN0QixPQUFPLFNBQVM7QUFDaEIsU0FBUSxhQUFhLGVBQWM7QUFDbkMsU0FBUSxRQUFRLE9BQU8sS0FBSyxhQUFZO0FBQ3hDLE9BQU8sV0FBVztBQUNsQixP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
