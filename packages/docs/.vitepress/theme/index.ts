import type {App} from "vue";
import {ElementPlusContainer} from "@vitepress-demo-preview/component";
import DefaultTheme from "vitepress/theme";
import LimonergyUi from "limonergy-ui";

import "@vitepress-demo-preview/component/dist/style.css";
import "limonergy-ui/theme/index.css"

export default {
    ...DefaultTheme,
    enhanceApp({app}: {app: App}) {
        app.component("demo-preview", ElementPlusContainer)
        app.use(LimonergyUi)
    }
}