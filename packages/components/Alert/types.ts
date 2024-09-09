export type AlertType = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  title?: string
  type?: AlertType
  description?: string
  effect?: 'dark' | 'light'
  closable?: boolean
  center?: boolean
  showIcon?: boolean
}

export interface AlertEmits {
  (e: 'close'): void
}

export interface AlertInstance {
  open(): void
  close(): void
}

export const typeIconMap = new Map([
  ['info', 'circle-info'],
  ['success', 'check-circle'],
  ['warning', 'circle-exclamation'],
  ['danger', 'circle-xmark'],
  ['error', 'circle-xmark'],
])
