<script setup lang="ts">
import type { CollapseItemProps } from './types.ts'
import { inject, computed } from 'vue'
import transitionEvents from './transitionEvents'
import { COLLAPSE_CTX_KEY } from './constants.ts'
import LmIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'LmCollapseItem',
})

const props = defineProps<CollapseItemProps>()
const ctx = inject(COLLAPSE_CTX_KEY)
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name))

function handleClick() {
  if (props.disabled) return
  ctx?.handleItemClick(props.name)
}
</script>
<template>
  <div
    class="er-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="er-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleClick"
    >
      <span class="er-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <lm-icon icon="angle-right" class="header-angle" />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="er-collapse-item__wapper" v-show="isActive">
        <div class="er-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
