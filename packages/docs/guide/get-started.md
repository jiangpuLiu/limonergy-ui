---
search: false
next:
  link: /components/button
  text: Button 按钮
---

# LIMONERGY-UI 组件库

## 安装

```bash
npm i @limonergy-ui --save
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import LimonergyUi from 'limonergy-ui'
// 引入样式
import 'toy-element/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(LimonergyUi).mount('#app')
```

```vue
<template>
  <lm-button>我是 Button</lm-button>
</template>
```

**单个导入**

Limonergy-Ui 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <lm-button>我是 Button</lm-button>
</template>
<script>
import { LmButton } from ' limonergy-ui'
export default {
  components: { LmButton },
}
</script>
```

## 亮点

::: details

- Vite + Vitest + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
- 大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。
- 当然，也会展示 发布“开箱即用” 的 npm 包
  :::
