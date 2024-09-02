<script setup lang="ts">
import type {AlertProps, AlertEmits, AlertInstance} from "./types";
import {TypeIconMap} from "./types.ts";
import {computed, ref} from "vue";
import LmIcon from "../Icon/Icon.vue";

defineOptions({
  name: "LmAlert"
})

const props = withDefaults(defineProps<AlertProps>(), {
  type: "info",
  effect: "light",
  closable: true
})

const emits = defineEmits<AlertEmits>()

const visible = ref(true)
const slots = defineSlots()

const iconName = computed(() => TypeIconMap[props.type] ?? "circle-info")
const withDescription = computed(() => props.description || slots.default)


const close = () => {
  visible.value = false
  emits("close")
}

const open = () => {
  visible.value = true
}

defineExpose<AlertInstance>({
  close,
  open
})

</script>

<template>
  <transition name="er-alert-fade">
    <div
        v-show="visible"
        class="er-alert"
        role="alert"
        :class="{
        [`er-alert__${type}`]: type,
        [`er-alert__${effect}`]: effect,
        'text-center': center,
      }"
    >
      <lm-icon
          v-if="showIcon"
          class="er-alert__icon"
          :class="{ 'big-icon': withDescription }"
          :icon="iconName"
      />
      <div class="er-alert__content">
        <span
            class="er-alert__title"
            :class="{ 'with-desc': withDescription }"
            :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="er-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="er-alert__close" v-if="closable">
          <lm-icon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import "./style.css";
</style>