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

export enum TypeIconMap {
  info = 'circle-info',
  success = 'check-circle',
  warning = 'circle-exclamation',
  error = 'circle-xmark',
  danger = 'circle-xmark',
}
