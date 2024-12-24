export interface DialogProps {
  visible: boolean
  width?: string
  title?: string
}

export interface DialogEmits {
  (event: 'update:visible', visible: boolean): void
  (event: 'close'): void
}

export interface WithStyleType {
  top: number
  left: number
  offsetX: number
  offsetY: number
  transition: string
  floatBgc: string
  initDialogWidth: number
}

export interface StateType {
  dragging: boolean
  isHidden: boolean
}

export interface BodyStyleType {
  width: number
  height: number
}
