<script setup lang="ts">
defineOptions({
  name: 'App',
})

import { LmButton, VeButton } from 'limonergy-ui'
import LmDialog from '../../components/Dialog/Dialog.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <VeButton type="primary" size="large" @click="visible = true">
    打开弹窗
  </VeButton>
  <LmButton @click="visible = false" size="large">关闭弹窗</LmButton>
  <lm-dialog v-model:visible="visible" title="dragDialog" width="40%">
    <template #title>
      <span>自定义标题</span>
    </template>
    <div class="content"></div>

    <template #footer>
      <lm-button type="primary" @click="visible = false">确定</lm-button>
      <lm-button @click="visible = false">取消</lm-button>
    </template>
  </lm-dialog>
</template>

<style>
.content {
  width: 100%;
}
</style>
