// lib/store/root-store.ts
import { createStore as create } from 'zustand'
import { ToastSlice, createToastSlice } from './toastSlice'
import { AuthSlice, createAuthSlice } from './authSlice'

// Combine the types
export type Store = AuthSlice & ToastSlice

export const createStore = (initprops?: Partial<Store>) => {
  return create<Store>()((...a) => ({
    // ...createAuthSlice(...a),
    // ...createToastSlice(...a),
    //TODO:check if this implementation is good practice for initialazie props
    auth: {
      ...createAuthSlice(...a).auth,
      ...initprops?.auth,
    },
    toast: {
      ...createToastSlice(...a).toast,
      ...initprops?.toast,
    },
  }))
}
