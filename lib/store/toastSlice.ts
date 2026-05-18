import { StateCreator } from 'zustand'

interface ToastState {
  open: boolean
  type: 'alert' | 'notif'
  severity: 'error' | 'warning' | 'info' | 'success'
  message: string
  duration: number
  vertical: 'top' | 'bottom'
  horizontal: 'right' | 'center' | 'left'
  confirm: boolean
  resolve: (value: unknown) => void
}

interface ToastActions {
  setToast: (props: Partial<ToastState>) => void | Promise<unknown>
  showToast: (on: boolean) => void
}

export interface ToastSlice {
  toast: ToastState & ToastActions
}

const initialState: ToastState = {
  open: false,
  type: 'notif',
  severity: 'success',
  message: '',
  duration: 3000,
  vertical: 'top',
  horizontal: 'center',
  confirm: false,
  resolve: () => undefined,
}

export const createToastSlice: StateCreator<ToastSlice> = (set) => ({
  toast: {
    ...initialState,
    showToast: (on) => {
      set(({ toast }) => ({
        toast: {
          ...toast,
          open: on,
        },
      }))
    },
    setToast: (props) => {
      let resolve: (value: unknown) => void
      let promise
      if (props.confirm)
        promise = new Promise((_resolve) => {
          resolve = _resolve
        })
      set(({ toast }) => ({
        toast: {
          ...toast,
          ...initialState,
          ...props,
          resolve: resolve,
        },
      }))
      if (props.confirm) return promise
    },
  },
})

export const selectToast = (state: ToastSlice) => state.toast
