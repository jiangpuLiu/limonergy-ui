import {describe, expect, it, vi} from "vitest";
import {ref, defineComponent} from "vue";
import {mount} from "@vue/test-utils";

import useClickOutside from "../src/useClickOustside.ts";

describe("hooks/useClickOutside", () => {
    it('should add "click-outside" listener', async () => {
        const target = ref<HTMLElement>()
        const btnRef = ref<HTMLElement>()

        const handler = vi.fn()

        mount(
            defineComponent({
                setup() {
                    useClickOutside(target, handler)
                    return () => <div ref={target}>
                        <div ref={btnRef}>click me</div>
                    </div>
                }
            })
        )

        await btnRef.value?.click()
        expect(handler).not.toHaveBeenCalledOnce()

        await document.body.click()
        expect(handler).toHaveBeenCalledOnce()
    })
})