<script setup lang="ts">
import {computed, ref, inject} from "vue";
import type {ButtonProps, ButtonEmits, ButtonInstance} from "./types.ts";
import {BUTTON_GROUP_CTX_KEY} from "./constants.ts";
import {throttle} from 'lodash-es'
import {LmIcon} from "../Icon";

defineOptions({
  name: 'LmButton'
})

const slots = defineSlots()
const _ref = ref<HTMLButtonElement>()
const emits = defineEmits<ButtonEmits>()
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 300
})

const size = computed(() => ctx?.size ?? props?.size ?? '')
const type = computed(() => ctx?.type ?? props?.type ?? '')
const disabled = computed(() => ctx?.disabled ?? props?.disabled ?? false)
const iconStyle = computed(() => ({marginRight: slots.default ? '6px' : '0'}))

const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, {trailing: false})


defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<template>
  <component
      :ref="_ref"
      :is="tag"
      :autofocus="autofocus"
      class="er-button"
      :type="tag === 'button' ? nativeType : void 0"
      :disabled="disabled || loading ? true : void 0"
      :class="{
        [`er-button--${type}`]: type,
        [`er-button--${size}`]: size,
        'is-round': round,
        'is-circle': circle,
        'is-plain': plain,
        'is-disabled': disabled,
        'is-loading': loading,
      }"
      @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <lm-icon
            class="loading-icon"
            :icon="loadingIcon ?? 'spinner'"
            :style="iconStyle"
            size="1x"
            spin
        />
      </slot>
    </template>

    <template v-if="icon && !loading">
      <lm-icon
          :icon="icon"
          :style="iconStyle"
          size="1x"
      />
    </template>



    <slot></slot>
  </component>
</template>

<style scoped src="./style.css">
</style>