<script setup lang="ts">
import type {CollapseEmits, CollapseProps, CollapseItemName} from "./types.ts";
import {ref, watch, provide, watchEffect} from "vue";
import {COLLAPSE_CTX_KEY} from "./constants.ts";
import {each} from "lodash-es";
import {debugWarn} from "@limonergy-ui/utils/error.ts";

const COMP_NAME = 'LmCollapseItem' as const

defineOptions({
  name: COMP_NAME
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref(props.modelValue)


watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME,'accordion is true, but modelValue has more than one active name')
  }
})

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value]

  // 手风琴模式
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item]
    updateActiveNames(_activeNames)
    return
  }

  const index = _activeNames.indexOf(item)
  if (index > -1) {
    _activeNames.splice(index, 1)
  } else {
    _activeNames.push(item)
  }
  updateActiveNames(_activeNames)
}

function updateActiveNames(val: CollapseItemName[]) {
  activeNames.value = val;
  each(["update:modelValue", "change"], (e) =>
      emits(e as "update:modelValue" & "change", val)
  );
}

watch(
    () => props.modelValue,
    (newNames) => updateActiveNames(newNames)
)

provide(COLLAPSE_CTX_KEY,{
      activeNames,
      handleItemClick
    }
)

</script>

<template>
  <div class="er-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import './style.css';
</style>