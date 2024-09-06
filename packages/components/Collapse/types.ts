import type { Ref } from 'vue'

export type CollapseItemName = string | number

export interface CollapseProps {
  modelValue: CollapseItemName[]
  accordion?: boolean
}

export interface CollapseItemProps {
  name: CollapseItemName
  title?: string
  disabled?: boolean
}

export interface CollapseEmits {
  (event: 'update:modelValue', value: CollapseItemName[]): void
  (event: 'change', value: CollapseItemName[]): void
}

export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>
  handleItemClick(name: CollapseItemName): void
}
