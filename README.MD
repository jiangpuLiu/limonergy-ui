# 项目结构

## 项目根目录
|-- NpmProject                         # 项目根目录

## Git 忽略文件
|-- .gitignore                         # Git 忽略文件

## TypeScript 环境声明文件
|-- env.d.ts                           # TypeScript 环境声明文件

## 项目依赖和配置信息
|-- package.json                       # 项目依赖和配置信息

## pnpm 锁定文件
|-- pnpm-lock.yaml                     # pnpm 锁定文件

## pnpm 工作区配置
|-- pnpm-workspace.yaml                # pnpm 工作区配置

## PostCSS 配置文件
|-- postcss.config.cjs                 # PostCSS 配置文件

## TypeScript 构建配置
|-- tsconfig.build.json                # TypeScript 构建配置

## TypeScript 配置
|-- tsconfig.json                      # TypeScript 配置

## Node.js TypeScript 配置
|-- tsconfig.node.json                 # Node.js TypeScript 配置

## Vitest 配置文件
|-- vitest.config.ts                   # Vitest 配置文件

## Vitest 测试环境设置
|-- vitest.setup.ts                    # Vitest 测试环境设置

## GitHub 配置
|-- .github                            # GitHub 配置
|   |-- workflows                      # GitHub Actions 工作流
|       |-- test-and-deploy.yml        # 测试和部署工作流配置

## 库目录
|-- libs                               # 库目录
|   |-- vite-plugins                   # Vite 插件
|       |-- hooksPlugin.ts             # Vite 插件：Hooks 插件
|       |-- index.ts                   # 插件入口文件
|       |-- package.json               # 插件依赖和配置信息
|       |-- vite.config.ts             # Vite 插件配置
|       |-- .dist                      # 构建输出目录
|           |-- hooksPlugin.d.ts       # 插件类型声明
|           |-- index.d.ts             # 插件入口文件类型声明
|           |-- index.js               # 插件入口文件 JavaScript 输出

## 包目录
|-- packages                           # 包目录

## 初始化脚本
|-- init.shell                         # 初始化脚本

## 组件包
|-- components                          # 组件包
|   |-- index.ts                       # 组件包入口文件
|   |-- package.json                   # 组件包依赖和配置信息
|   |-- Alert                          # Alert 组件
|       |-- Alert.test.tsx             # Alert 组件测试
|       |-- Alert.vue                  # Alert 组件 Vue 文件
|       |-- index.ts                   # Alert 组件入口文件
|       |-- style.css                  # Alert 组件样式
|       |-- types.ts                   # Alert 组件类型声明
|   |-- Button                         # Button 组件
|   |-- Collapse                       # Collapse 组件
|   |-- Icon                           # Icon 组件
|   |-- Tooltip                        # Tooltip 组件
|   |-- __tests__                      # 组件包测试目录
|       |-- index.test.tsx             # 组件包测试入口文件

## 核心功能包
|-- core                               # 核心功能包
|   |-- index.ts                       # 核心包入口文件
|   |-- package.json                   # 核心包依赖和配置信息
|   |-- build                          # 构建配置
|       |-- vite.es.config.ts          # Vite 构建配置 (ES)
|       |-- vite.umd.config.ts         # Vite 构建配置 (UMD)
|   |-- utils                          # 工具函数
|       |-- components.ts              # 组件工具函数
|       |-- printLogo.ts               # 打印 Logo 工具函数

## 文档目录
|-- docs                               # 文档目录
|   |-- api-examples.md                 # API 示例
|   |-- index.md                       # 文档首页
|   |-- markdown-examples.md           # Markdown 示例
|   |-- package.json                   # 文档依赖和配置信息
|   |-- .vitepress                     # VitePress 配置
|       |-- config.ts                  # VitePress 配置文件
|       |-- theme                      # VitePress 主题
|           |-- index.ts               # VitePress 主题入口文件

## 自定义 Hooks
|-- hooks                              # 自定义 Hooks
|   |-- index.ts                       # Hooks 包入口文件
|   |-- package.json                   # Hooks 包依赖和配置信息
|   |-- vite.config.ts                 # Hooks 包 Vite 配置
|   |-- vitest.config.ts               # Hooks 包 Vitest 配置
|   |-- __test__                       # Hooks 包测试目录
|       |-- index.test.tsx             # Hooks 包测试入口文件
|       |-- useClickOutside.test.tsx   # useClickOutside Hook 测试
|       |-- useEventListener.test.tsx  # useEventListener Hook 测试
|   |-- src                            # Hooks 源码
|       |-- useClickOutside.ts         # useClickOutside Hook
|       |-- useEventListener.ts        # useEventListener Hook

## 演示应用
|-- play                               # 演示应用
|   |-- index.html                     # HTML 文件
|   |-- package.json                   # 演示应用依赖和配置信息
|   |-- vite.config.ts                 # 演示应用 Vite 配置
|   |-- .storybook                   # Storybook 配置
|       |-- main.js                    # Storybook 主配置
|       |-- preview.js                 # Storybook 预览配置
|   |-- public                         # 公共静态资源
|       |-- vite.svg                   # 演示应用图标
|   |-- src                            # 演示应用源码
|       |-- App.vue                    # 主 Vue 组件
|       |-- main.ts                    # 入口 TypeScript 文件
|       |-- vite-env.d.ts              # Vite 环境声明
|       |-- assets                     # 静态资源
|           |-- vue.svg                # Vue 图标
|       |-- stories                    # Storybook 故事文件
|           |-- Alert.stories.ts      # Alert 组件故事
|           |-- Button.stories.ts     # Button 组件故事
|           |-- Collapse.stories.ts   # Collapse 组件故事
|           |-- Tooltip.stories.ts    # Tooltip 组件故事

## 主题
|-- theme                              # 主题
|   |-- index.css                      # 主题样式
|   |-- package.json                   # 主题依赖和配置信息
|   |-- reset.css                      # CSS 重置

## 工具包
|-- utils                              # 工具包
|   |-- index.ts                       # 工具包入口文件
|   |-- package.json                   # 工具包依赖和配置信息
|   |-- tsconfig.json                  # TypeScript 配置
|   |-- vite.config.ts                 # 工具包 Vite 配置
|   |-- __tests__                      # 工具包测试目录
|       |-- error.test.tsx             # 错误处理测试
|       |-- index.test.tsx             # 工具包测试入口文件
|       |-- install.test.tsx           # 安装相关测试
|       |-- tools.test.tsx             # 工具函数测试
|   |-- src                            # 工具包源码
|       |-- error.ts                   # 错误处理功能
|       |-- index.ts                   # 工具包入口文件
|       |-- install.ts                 # 安装功能
|       |-- tools.ts                   # 工具函数