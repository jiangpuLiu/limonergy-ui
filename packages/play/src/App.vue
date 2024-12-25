<script setup lang="ts">
defineOptions({
  name: 'App',
})

import { type VeGridProps } from 'limonergy-ui'
import LmDialog from '../../components/Dialog/Dialog.vue'
import { reactive, ref } from 'vue'

const visible = ref(false)

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VeGridProps<RowVO>>({
  border: true,
  height: 300,
  align: null,
  columnConfig: {
    resizable: true,
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'name' },
    { field: 'sex', title: 'sex' },
    { field: 'address', title: 'Address' },
  ],
  toolbarConfig: {
    slots: {
      buttons: 'toolbar_buttons',
    },
  },
  data: [
    {
      id: 10001,
      name: 'Test1',
      nickname: 'T1',
      role: 'Develop',
      sex: 'Man',
      age: 28,
      address: 'Shenzhen',
    },
    {
      id: 10002,
      name: 'Test2',
      nickname: 'T2',
      role: 'Test',
      sex: 'Women',
      age: 22,
      address: 'Guangzhou',
    },
    {
      id: 10003,
      name: 'Test3',
      nickname: 'T3',
      role: 'PM',
      sex: 'Man',
      age: 32,
      address: 'Shanghai',
    },
    {
      id: 10004,
      name: 'Test4',
      nickname: 'T4',
      role: 'Designer',
      sex: 'Women',
      age: 23,
      address: 'Shenzhen',
    },
    {
      id: 10005,
      name: 'Test5',
      nickname: 'T5',
      role: 'Develop',
      sex: 'Women',
      age: 30,
      address: 'Shanghai',
    },
    {
      id: 10006,
      name: 'Test6',
      nickname: 'T6',
      role: 'Designer',
      sex: 'Women',
      age: 21,
      address: 'Shenzhen',
    },
    {
      id: 10007,
      name: 'Test7',
      nickname: 'T7',
      role: 'Test',
      sex: 'Man',
      age: 29,
      address: 'Shenzhen',
    },
    {
      id: 10008,
      name: 'Test8',
      nickname: 'T8',
      role: 'Develop',
      sex: 'Man',
      age: 35,
      address: 'Shenzhen',
    },
  ],
})
</script>

<template>
  <VeButton :gridOptions="gridOptions"></VeButton>
  <LmButton type="primary" @click="visible = false" size="large">
    关闭弹窗
  </LmButton>
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
