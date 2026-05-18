// src/providers/store-provider.tsx
'use client'

import { type ReactNode, createContext, useState, useContext } from 'react'
import { useStore as use } from 'zustand'

import { type Store, createStore } from '@/lib/store/sotre'

export type StoreApi = ReturnType<typeof createStore>

export const StoreContext = createContext<StoreApi | undefined>(undefined)

export interface StoreProviderProps {
  state: Partial<Store>
  children: ReactNode
}

export const StoreProvider = ({ state, children }: StoreProviderProps) => {
  const [store] = useState(() => createStore(state))
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = <T,>(selector: (store: Store) => T): T => {
  const storeContext = useContext(StoreContext)
  if (!storeContext) {
    throw new Error(`useStore must be used within StoreProvider`)
  }

  return use(storeContext, selector)
}
