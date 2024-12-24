export const messageTypes = [
  'info',
  'success',
  'warning',
  'error',
  'danger',
] as const

export type messageType = (typeof messageTypes)[number]

export interface MessageHandler {
  close: () => void
}
