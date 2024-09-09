import type { App } from 'vue'
import { ElementPlusContainer } from 'vitepress-preview-component'
import DefaultTheme from 'vitepress/theme'
import LimonergyUi from 'limonergy-ui'
import './custom.css'

import 'vitepress-preview-component/style.css'
import 'limonergy-ui/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(LimonergyUi)
  },
}
