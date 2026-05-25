import { StateCreator } from 'zustand'
// import { User } from '../types/user-types'

interface AuthState {
  // user: User | undefined
  user: undefined
}

interface AuthActions {
  setAuth?: (props: Partial<AuthState>) => void
}

export interface AuthSlice {
  auth: AuthState & AuthActions
}

const initialState: AuthState = {
  user: undefined,
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  auth: {
    ...initialState,
    setAuth: (props) =>
      set((state) => ({
        auth: {
          ...state.auth,
          ...props,
        },
      })),
  },
})

export const selectAuth = (state: AuthSlice) => state.auth
