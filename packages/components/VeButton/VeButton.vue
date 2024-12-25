<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-button @click="gridOptions.align = 'left'">居左</vxe-button>
        <vxe-button @click="gridOptions.align = 'center'">居中</vxe-button>
        <vxe-button @click="gridOptions.align = 'right'">居右</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import type { VeGridProps } from './types'

withDefaults(defineProps<{ gridOptions: VeGridProps }>(), {
  gridOptions: () => ({}),
})
</script>
