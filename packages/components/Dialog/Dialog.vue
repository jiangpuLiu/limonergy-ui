<template>
  <transition name="dialog-fade">
    <div
      v-if="visible"
      ref="lmDialogRef"
      :class="{
        'float-button': state.isHidden,
        'drag-dialog': !state.isHidden,
      }"
      :style="dialogStyle"
    >
      <!-- Dialog -->
      <div v-show="!state.isHidden" class="drag-dialog__container">
        <div class="drag-dialog__header" @mousedown="startDrag">
          <slot name="title">
            <span class="drag-dialog__title">{{ title }}</span>
          </slot>
          <div class="header-icons">
            <span @click="toggleDialog">
              <lm-icon icon="minus" size="1x" />
            </span>
            <span @click="closeDialog"><lm-icon icon="xmark" size="1x" /></span>
          </div>
        </div>
        <div class="drag-dialog__body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="drag-dialog__footer">
          <slot name="footer" />
        </div>
      </div>

      <!-- Floating Button -->
      <div
        v-show="state.isHidden"
        class="drag-float__button"
        :style="{ backgroundColor: withStyle.floatBgc }"
        @mousedown="startDrag"
      >
        <lm-icon icon="expand" size="1x" @click="toggleDialog" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, reactive } from 'vue'
import type {
  BodyStyleType,
  DialogEmits,
  DialogProps,
  StateType,
  WithStyleType,
} from './types.ts'
import LmIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'LmDialog',
})

const lmDialogRef = ref<HTMLElement | null>(null)

const props = withDefaults(defineProps<DialogProps>(), {
  visible: false,
  width: '30%',
  title: 'Draggable Dialog',
})

const emits = defineEmits<DialogEmits>()

const state = reactive<StateType>({
  dragging: false,
  isHidden: false,
})

const withStyle = reactive<WithStyleType>({
  top: 0,
  left: 0,
  offsetX: 0,
  offsetY: 0,
  transition: '',
  floatBgc: '',
  initDialogWidth: 0,
})

const bodyStyle = reactive<BodyStyleType>({
  width: 0,
  height: 0,
})

const dialogStyle = computed(() => ({
  width: props.width,
  top: `${withStyle.top}px`,
  left: `${withStyle.left}px`,
  transition: withStyle.transition,
}))

const openDialog = async () => {
  nextTick(() => {
    console.log('ref', lmDialogRef.value)
    if (lmDialogRef.value) {
      withStyle.initDialogWidth = lmDialogRef.value.offsetWidth
      bodyStyle.width = window.innerWidth
      bodyStyle.height = window.innerHeight
      initDialogPosition()
    }
  })
}

const initDialogPosition = () => {
  withStyle.left = (bodyStyle.width - withStyle.initDialogWidth) / 2
  withStyle.top = 30
}

const startDrag = (e: MouseEvent) => {
  withStyle.transition = 'none'
  state.dragging = true
  withStyle.offsetX = e.clientX - withStyle.left
  withStyle.offsetY = e.clientY - withStyle.top

  const moveHandler = (e: MouseEvent) => {
    if (state.dragging) {
      let newLeft = e.clientX - withStyle.offsetX
      let newTop = e.clientY - withStyle.offsetY

      newLeft = Math.max(0, Math.min(newLeft, bodyStyle.width - 50))
      newTop = Math.max(0, Math.min(newTop, bodyStyle.height - 50))

      withStyle.left = newLeft
      withStyle.top = newTop
    }
  }

  const stopDrag = () => {
    state.dragging = false
    document.removeEventListener('mousemove', moveHandler)
    document.removeEventListener('mouseup', stopDrag)
  }

  document.addEventListener('mousemove', moveHandler)
  document.addEventListener('mouseup', stopDrag)
}

const toggleDialog = () => {
  withStyle.transition = 'all 0.3s cubic-bezier(.3,.82,.76,.98)'
  state.isHidden = !state.isHidden
  if (!state.isHidden) {
    withStyle.floatBgc = ''
    initDialogPosition()
  } else {
    withStyle.left = bodyStyle.width - 60
    withStyle.top = bodyStyle.height - 60
    setTimeout(() => (withStyle.floatBgc = '#007bff'), 200)
  }
}

const closeDialog = () => {
  emits('update:visible', false)
}

watch(
  () => props.visible,
  (val) => {
    val && openDialog()
  },
  { immediate: true },
)
</script>

<style scoped>
@import './style.css';
</style>
