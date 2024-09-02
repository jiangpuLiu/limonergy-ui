import {describe, expect, it} from "vitest"
import {
    debugWarn,
    throwError,
    withInstall,
    makeInstall,
} from "../";

describe("utils/index", () => {
    it ('debugWarn should be exported', () => {
        expect(debugWarn).toBeDefined()
    })

    it ('throwError should be exported', () => {
        expect(throwError).toBeDefined()
    })

    it ('withInstall should be exported', () => {
        expect(withInstall).toBeDefined()
    })

    it ('makeInstall should be exported', () => {
        expect(makeInstall).toBeDefined()
    })
})