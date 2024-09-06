<script setup lang="ts">
import type { _TooltipProps, TooltipEmits, TooltipInstance, EventListenerMap } from './types'
import {computed, ref, watch, onMounted, type Ref, watchEffect} from 'vue'
import {bind, debounce, type DebouncedFunc} from "lodash-es";
import {createPopper, type Instance} from "@popperjs/core";
import {useClickOutside} from "@limonergy-ui/hooks";
import useEvenstToTiggerNode from "./useEventsToTiggerNode.ts";


defineOptions({
  name: 'LmTooltip'
})

const props = withDefaults(defineProps<_TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  showTimeout: 0,
  hideTimeout: 200,
})
const emits = defineEmits<TooltipEmits>()

const visible = ref(false)
const events:Ref<EventListenerMap> = ref({})
const outerEvents:Ref<EventListenerMap> = ref({})
const dropdownEvents:Ref<EventListenerMap> = ref({})

const containerNode = ref<HTMLElement>()
const _triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()

const triggerNode = computed(() => {
   if (props.virtualTriggering) {
     return (
         (props.virtualRef as HTMLElement) ?? _triggerNode.value
     )
   }
   return _triggerNode.value as HTMLElement
})

const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9]
      }
    }
  ],
  ...props.popperOptions
}))

let openDebounce: DebouncedFunc<() => void> | void
let closeDebounce: DebouncedFunc<() => void> | void
let popperInstance: null | Instance

const openDelay = computed(() => props.trigger === 'hover' ? props.showTimeout : 0)
const closeDelay = computed(() => props.trigger === 'hover' ? props.hideTimeout : 0)

const triggerStrategyMap: Map<string, () => void> = new Map();
triggerStrategyMap.set("hover", () => {
  events.value["mouseenter"] = openFinal;
  outerEvents.value["mouseleave"] = closeFinal;
  dropdownEvents.value["mouseenter"] = openFinal;
});
triggerStrategyMap.set("click", () => {
  events.value["click"] = togglePopper;
});
triggerStrategyMap.set("contextmenu", () => {
  events.value["contextmenu"] = (e) => {
    e.preventDefault();
    openFinal();
  };
});

function openFinal() {
  closeDebounce?.cancel()
  openDebounce?.()
}

function closeFinal() {
  openDebounce?.cancel()
  closeDebounce?.()
}

function setVisible(val: boolean) {
  if (props.disabled) return;
  visible.value = val
  emits('visible-change', val)
}

function togglePopper() {
  visible.value ? closeFinal() : openFinal()
}

function attachEvents() {
  if (props.disabled || props.manual) return;

  triggerStrategyMap.get(props.trigger)?.();
}



function destroyPopperInstance() {
  popperInstance?.destroy()
  popperInstance = null
}

function resetEvents() {
  events.value = {}
  outerEvents.value = {}
  dropdownEvents.value = {}
  attachEvents()
}

const show: TooltipInstance['show'] = openFinal
const hide: TooltipInstance['hide'] = () => {
  openDebounce?.cancel()
  setVisible(false)
}

watch(visible, (val) => {
  if (!val) return
  if (_triggerNode.value && popperNode.value) {
    popperInstance = createPopper(_triggerNode.value, popperNode.value, popperOptions.value)
  }
}, {flush: 'post'})

watch(() => props.manual, (isManual) => {
  if (isManual) {
   resetEvents()
    return
  }
  attachEvents()
})

watch(() => props.trigger, () => {
  // if (val === oldVal) return
  openDebounce?.cancel()
  visible.value = false
  emits('visible-change', false)
  resetEvents()
})

watchEffect(() => {
  if (!props.manual) {
    attachEvents()
  }
  openDebounce = debounce(bind(setVisible, null, true), openDelay.value)
  closeDebounce = debounce(bind(setVisible, null, false), closeDelay.value)
})

useClickOutside(containerNode, () => {
  emits('click-outside')
  if (props.trigger === 'hover' || props.manual) return
  visible.value && closeFinal()
})

useEvenstToTiggerNode(props, triggerNode, events, () => {
  openDebounce?.cancel()
  setVisible(false)
})

onMounted(() => {
  destroyPopperInstance()
})


defineExpose<TooltipInstance>({
  show,
  hide
})



</script>

<template>
  <div class="er-tooltip" ref="containerNode" v-on="outerEvents">
    <div
        class="er-tooltip__trigger"
        ref="_triggerNode"
        v-on="events"
        v-if="!virtualTriggering"
    >
      <slot></slot>
    </div>
    <slot name="default" v-else></slot>

    <transition :name="transition" @after-leave="destroyPopperInstance">
      <div
          class="er-tooltip__popper"
          ref="popperNode"
          v-on="dropdownEvents"
          v-if="visible"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>