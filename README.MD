# 文档说明

## 项目简介
### 本项目是一个基于Vite, TypeScript, Vue3构建的monorepo库。
- 文档库: 采用vitepress构建文档，对markdown-it和@vitepress-preview-components进行扩展，支持组件示例展示；
- 组件库: 基于Vite5, TypeScript, vue3搭建。使用storybook进行组件调试开发，vitest进行组件单元测试；
- 工具库: 基于Vite5, TypeScript搭建。vite对该库独立分包构建，发包处理。使用vitest进行工具函数单元测试

### 工程化管理
- 使用pnpm进行包管理，pnpm-workspace.yaml进行monorepo管理；
- 代码校验：eslint, prettier, stylelint;
- 提交规范：lint-staged, husky, commitlint;
- 自动化文档发布：gitHub Actions, pnpm publish;

