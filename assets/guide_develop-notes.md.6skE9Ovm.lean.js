import{_ as n,e as i,aa as a,b as l}from"./chunks/framework.A2cjijOS.js";const r=JSON.parse('{"title":"文档说明","description":"","frontmatter":{},"headers":[],"relativePath":"guide/develop-notes.md","filePath":"guide/develop-notes.md"}'),p={name:"guide/develop-notes.md"};function t(e,s,h,o,k,E){return l(),i("div",null,s[0]||(s[0]=[a(`<h1 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to &quot;文档说明&quot;">​</a></h1><h2 id="项目简介" tabindex="-1">项目简介 <a class="header-anchor" href="#项目简介" aria-label="Permalink to &quot;项目简介&quot;">​</a></h2><h3 id="本项目是一个基于-vite-typescript-vue3-构建的-monorepo-库。" tabindex="-1">本项目是一个基于 Vite, TypeScript, Vue3 构建的 monorepo 库。 <a class="header-anchor" href="#本项目是一个基于-vite-typescript-vue3-构建的-monorepo-库。" aria-label="Permalink to &quot;本项目是一个基于 Vite, TypeScript, Vue3 构建的 monorepo 库。&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><strong>文档库，采用 vitepress 构建文档，对 markdown-it 和@vitepress-preview-components 进行扩展，支持组件示例展示；</strong></li><li><strong>组件库，基于 Vite5, TypeScript, vue3 搭建。使用 storybook 进行组件调试开发，vitest 进行组件单元测试；</strong></li><li><strong>工具库，基于 Vite5, TypeScript 搭建。vite 对该库独立分包构建，发包处理。使用 vitest 进行工具函数单元测试</strong></li></ul></div><h3 id="工程化管理" tabindex="-1">工程化管理 <a class="header-anchor" href="#工程化管理" aria-label="Permalink to &quot;工程化管理&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><strong>使用 pnpm 进行包管理，pnpm-workspace.yaml 进行 monorepo 管理；</strong></li><li><strong>代码校验：eslint, prettier, stylelint;</strong></li><li><strong>提交规范：lint-staged, husky, commitlint;</strong></li><li><strong>自动化文档发布：gitHub Actions, pnpm publish;</strong></li></ul></div><h3 id="结构说明" tabindex="-1">结构说明 <a class="header-anchor" href="#结构说明" aria-label="Permalink to &quot;结构说明&quot;">​</a></h3><h4 id="目录结构说明" tabindex="-1">目录结构说明 <a class="header-anchor" href="#目录结构说明" aria-label="Permalink to &quot;目录结构说明&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 项目根目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- limonergy-ui # 项目根目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Git 忽略文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- .gitignore # Git 忽略文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## TypeScript 环境声明文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- env.d.ts # TypeScript 环境声明文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 项目依赖和配置信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- package.json # 项目依赖和配置信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## pnpm 锁定文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- pnpm-lock.yaml # pnpm 锁定文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## pnpm 工作区配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- pnpm-workspace.yaml # pnpm 工作区配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## PostCSS 配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- postcss.config.cjs # PostCSS 配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## TypeScript 构建配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- tsconfig.build.json # TypeScript 构建配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## TypeScript 配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- tsconfig.json # TypeScript 配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Node.js TypeScript 配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- tsconfig.node.json # Node.js TypeScript 配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Vitest 配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- vitest.config.ts # Vitest 配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Vitest 测试环境设置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- vitest.setup.ts # Vitest 测试环境设置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## GitHub 配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- .github # GitHub 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- workflows # GitHub Actions 工作流</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- test-and-deploy.yml # 测试和部署工作流配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## husky 配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- .husky # husky 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- commit-msg # 代码提交规范</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- pre-commit # 代码提交钩子：格式化，校验</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 库目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- libs # 库目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite-plugins # Vite 插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- hooksPlugin.ts # Vite 插件：Hooks 插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.ts # 插件入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- package.json # 插件依赖和配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite.config.ts # Vite 插件配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- .dist # 构建输出目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- hooksPlugin.d.ts # 插件类型声明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.d.ts # 插件入口文件类型声明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.js # 插件入口文件 JavaScript 输出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 包目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- packages # 包目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 初始化脚本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- init.shell # 初始化脚本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 组件包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- components # 组件包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.ts # 组件包入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- package.json # 组件包依赖和配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Alert # Alert 组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Alert.test.tsx # Alert 组件测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Alert.vue # Alert 组件 Vue 文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.ts # Alert 组件入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- style.css # Alert 组件样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- types.ts # Alert 组件类型声明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Button # Button 组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Collapse # Collapse 组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Icon # Icon 组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Tooltip # Tooltip 组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">**tests**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> # 组件包测试目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.test.tsx # 组件包测试入口文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 核心功能包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- core # 核心功能包：即组件库的打包入口处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.ts # 核心包入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- package.json # 核心包依赖和配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- build # 构建配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite.es.config.ts # Vite 构建配置 (ES)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite.umd.config.ts # Vite 构建配置 (UMD)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- utils # 工具函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- components.ts # 组件工具函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- printLogo.ts # 打印 Logo 工具函数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 文档目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- docs # 文档目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- api-examples.md # API 示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.md # 文档首页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- markdown-examples.md # Markdown 示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- package.json # 文档依赖和配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- .vitepress # VitePress 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- config.ts # VitePress 配置文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- theme # VitePress 主题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.ts # VitePress 主题入口文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 自定义 Hooks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- hooks # 自定义 Hooks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.ts # Hooks 包入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- package.json # Hooks 包依赖和配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite.config.ts # Hooks 包 Vite 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vitest.config.ts # Hooks 包 Vitest 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">**test**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> # Hooks 包测试目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.test.tsx # Hooks 包测试入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- useClickOutside.test.tsx # useClickOutside Hook 测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- useEventListener.test.tsx # useEventListener Hook 测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- src # Hooks 源码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- useClickOutside.ts # useClickOutside Hook</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- useEventListener.ts # useEventListener Hook</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 演示应用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- play # 演示应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.html # HTML 文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- package.json # 演示应用依赖和配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite.config.ts # 演示应用 Vite 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- .storybook # Storybook 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- main.js # Storybook 主配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- preview.js # Storybook 预览配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- public # 公共静态资源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite.svg # 演示应用图标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- src # 演示应用源码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- App.vue # 主 Vue 组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- main.ts # 入口 TypeScript 文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite-env.d.ts # Vite 环境声明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- assets # 静态资源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vue.svg # Vue 图标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- stories # Storybook 故事文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Alert.stories.ts # Alert 组件故事</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Button.stories.ts # Button 组件故事</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Collapse.stories.ts # Collapse 组件故事</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- Tooltip.stories.ts # Tooltip 组件故事</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 主题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- theme # 主题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.css # 主题样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- package.json # 主题依赖和配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- reset.css # CSS 重置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 工具包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- utils # 工具包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.ts # 工具包入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- package.json # 工具包依赖和配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- tsconfig.json # TypeScript 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- vite.config.ts # 工具包 Vite 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">**tests**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> # 工具包测试目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- error.test.tsx # 错误处理测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.test.tsx # 工具包测试入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- install.test.tsx # 安装相关测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- tools.test.tsx # 工具函数测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- src # 工具包源码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- error.ts # 错误处理功能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- index.ts # 工具包入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- install.ts # 安装功能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| |-- tools.ts # 工具函数</span></span></code></pre></div><h4 id="packages-json-指令说明" tabindex="-1">packages.json 指令说明 <a class="header-anchor" href="#packages-json-指令说明" aria-label="Permalink to &quot;packages.json 指令说明&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;limonergy-ui-monorepo&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;pnpm --filter @limonergy-ui/play dev&quot;,                                                          // 启动 @limonergy-ui/play 包的开发模式</span></span>
<span class="line"><span>    &quot;story&quot;: &quot;pnpm --filter @limonergy-ui/play storybook&quot;,                                                  // 启动 @limonergy-ui/play 包的 Storybook</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;pnpm --filter @limonergy-ui/docs dev&quot;,                                                     // 启动 @limonergy-ui/docs 包的开发模式</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;pnpm --filter @limonergy-ui/docs build&quot;,                                                 // 构建 @limonergy-ui/docs 包</span></span>
<span class="line"><span>    &quot;test:filter&quot;: &quot;cross-env NODE_ENV=test pnpm --filter&quot;,                                                 // 用于过滤测试</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;run-s test-utils test-hooks test-comp&quot;,                                                        // 运行所有测试</span></span>
<span class="line"><span>    &quot;test-utils&quot;: &quot;pnpm run test:filter @limonergy-ui/utils test&quot;,                                          // 运行 @limonergy-ui/utils 包的测试</span></span>
<span class="line"><span>    &quot;test-comp&quot;: &quot;pnpm run test:filter @limonergy-ui/components test&quot;,                                      // 运行 @limonergy-ui/components 包的测试</span></span>
<span class="line"><span>    &quot;test-hooks&quot;: &quot;pnpm run test:filter @limonergy-ui/hooks test&quot;,                                          // 运行 @limonergy-ui/hooks 包的测试</span></span>
<span class="line"><span>    &quot;build:filter&quot;: &quot;cross-env NODE_ENV=production pnpm --filter&quot;,                                          // 用于过滤构建</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;run-s build-hooks build-utils build-comp&quot;,                                                    // 运行所有构建任务</span></span>
<span class="line"><span>    &quot;build-comp&quot;: &quot;pnpm run build:filter limonergy-ui build&quot;,                                               // 构建 limonergy-ui 包</span></span>
<span class="line"><span>    &quot;build-hooks&quot;: &quot;pnpm run build:filter @limonergy-ui/hooks build&quot;,                                       // 构建 @limonergy-ui/hooks 包</span></span>
<span class="line"><span>    &quot;build-utils&quot;: &quot;pnpm run build:filter @limonergy-ui/utils build&quot;,                                       // 构建 @limonergy-ui/utils 包</span></span>
<span class="line"><span>    &quot;build:dev&quot;: &quot;pnpm run build:filter limonergy-ui build:watch&quot;,                                          // 以观察模式构建 limonergy-ui 包</span></span>
<span class="line"><span>    &quot;lint&quot;: &quot;lint-staged&quot;,                                                                                  // 运行 lint-staged 进行代码检查</span></span>
<span class="line"><span>    &quot;format&quot;: &quot;prettier --write \\&quot;./**/*.{html,vue,ts,js,json,md}\\&quot;&quot;,                                       // 格式化所有相关文件</span></span>
<span class="line"><span>    &quot;lint:eslint&quot;: &quot;eslint &#39;packages/**/*.{ts,vue,tsx}&#39; &#39;libs/**/*.{ts,vue,tsx}&#39; --cache --fix&quot;,            // 运行 ESLint 检查 TypeScript 和 Vue 文件</span></span>
<span class="line"><span>    &quot;lint:style&quot;: &quot;stylelint &#39;packages/**/*.{css,scss,vue}&#39; &#39;libs/**/*.{css,scss,vue}&#39; --cache --fix&quot;,      // 运行 Stylelint 检查 CSS 和 SCSS 文件</span></span>
<span class="line"><span>    &quot;prepare&quot;: &quot;husky install&quot;,                                                                             // 安装 Husky 钩子</span></span>
<span class="line"><span>    &quot;commitlint&quot;: &quot;commitlint --config commitlint.config.cjs -e -V&quot;,                                        // 运行 Commitlint 进行提交信息检查</span></span>
<span class="line"><span>    &quot;install&quot;: &quot;pnpm install&quot;,                                                                              // 安装所有依赖</span></span>
<span class="line"><span>    &quot;clean&quot;: &quot;run-s clean:node_modules clean:pnpm-cache&quot;,                                                   // 清理 node_modules 和 pnpm 缓存</span></span>
<span class="line"><span>    &quot;clean:node_modules&quot;: &quot;find . -name &#39;node_modules&#39; -type d -prune -exec rm -rf &#39;{}&#39; +&quot;,                 // 删除所有 node_modules 文件夹</span></span>
<span class="line"><span>    &quot;clean:pnpm-cache&quot;: &quot;pnpm store prune&quot;                                                                  // 清理 pnpm 缓存</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;keywords&quot;: [],</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;@limonergy-ui/components&quot;: &quot;workspace:*&quot;,                                                              // 本地开发空间组件包</span></span>
<span class="line"><span>    &quot;@limonergy-ui/hooks&quot;: &quot;workspace:*&quot;,                                                                   // 本地开发空间 hooks 包</span></span>
<span class="line"><span>    &quot;@limonergy-ui/theme&quot;: &quot;workspace:*&quot;,                                                                   // 本地开发空间样式包</span></span>
<span class="line"><span>    &quot;@limonergy-ui/utils&quot;: &quot;workspace:*&quot;,                                                                   // 本地开发空间工具包</span></span>
<span class="line"><span>    &quot;@limonergy-ui/vite-plugins&quot;: &quot;workspace:*&quot;,                                                            // 本地开发空间 vite 插件包</span></span>
<span class="line"><span>    &quot;@vitest/coverage-v8&quot;: &quot;^1.6.0&quot;,</span></span>
<span class="line"><span>    &quot;@vue/test-utils&quot;: &quot;^2.4.6&quot;,</span></span>
<span class="line"><span>    &quot;jsdom&quot;: &quot;^24.1.0&quot;,</span></span>
<span class="line"><span>    &quot;limonergy-ui&quot;: &quot;workspace:*&quot;,                                                                           // 总包</span></span>
<span class="line"><span>    &quot;lodash-es&quot;: &quot;^4.17.21&quot;,</span></span>
<span class="line"><span>    &quot;vue&quot;: &quot;^3.4.29&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,11)]))}const d=n(p,[["render",t]]);export{r as __pageData,d as default};
