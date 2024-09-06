import {describe, expect, it} from "vitest"
import {
    debugWarn,
    throwError,
    withInstall,
    makeInstall,
    isObject,
    isHasProperty
} from "../index.ts";

describe("utils/src/index", () => {
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

    it ('isObject should be exported', () => {
        expect(isObject).toBeDefined()
    })

    it ('isHasProperty should be exported', () => {
        expect(isHasProperty).toBeDefined()
    })
})

// describe("utils/index", () => {
//     it ('utils-index should be exported', () => {
//         expect(withInstall).toBeDefined()
//     })
// })