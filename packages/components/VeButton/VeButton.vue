<script setup lang="ts">
defineOptions({ name: 'VeButton' })
</script>

<template>
  <vxe-button v-bind="$attrs">
    <slot></slot>
  </vxe-button>
</template>

<style scoped></style>
