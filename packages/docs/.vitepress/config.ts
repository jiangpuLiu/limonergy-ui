import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin'

import { NavRoutes } from './route/nav'
import { SidebarRouters } from './route/sidebar'

export default defineConfig({
  title: 'Limonergy-Ui',
  description: 'Limonergy-Ui 组件库',
  base: '/limonergy-ui/',
  themeConfig: {
    nav: NavRoutes,
    sidebar: SidebarRouters,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiangpuLiu/limonergy-ui' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview as any)
      md.use(componentPreview as any)
    },
  },
})
