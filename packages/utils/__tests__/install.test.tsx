import { describe, it, expect } from 'vitest'
import { defineComponent, createApp } from "vue";
import {withInstall, makeInstall} from "../src/install.ts";

const AppComp = defineComponent({
    setup() {
        return () => <div>App</div>
    }
})

const compA = withInstall(defineComponent({
    name: "CompA",
    setup() {
        return () => <div>CompA</div>
    }
}))

const compB = withInstall(defineComponent({
    name: "CompB",
    setup() {
        return () => <div>CompB</div>
    }
}))
describe('install', () => {
    it('withInstall should be worked without mount', () => {
        const app = createApp(AppComp)
        app.use(compA)

        expect(compA.install).toBeDefined()
        expect(app._context.components['CompA']).toBeTruthy()
        expect(app._context.components['CompB']).toBeFalsy()
    })

    it('makeInstall should be worked without mount', () => {
        const app = createApp(AppComp)
        const installer = makeInstall([compA, compB])
        app.use(installer)

        expect(installer).toBeDefined()
        expect(app._context.components['CompA']).toBeTruthy()
        expect(app._context.components['CompB']).toBeTruthy()
    })
})