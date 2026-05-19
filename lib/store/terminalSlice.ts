import { StateCreator } from 'zustand'

export interface TerminalTheme {
  logTextColor?: string
  logBackgroundColor?: string
  logBackgroundImage?: string
  logFontSize?: string
  inputTextColor?: string
  inputBackgroundColor?: string
  inputBackgroundImage?: string
  inputFontSize?: string
  inputPosition?: 'top' | 'center' | 'bottom'
  caretColor?: string
  caretIcon?: string
  caretBlink?: boolean
  caretBlinkSpeed?: number
}
interface TerminalState {
  theme: TerminalTheme
}

interface TerminalActions {
  setState: (props: Partial<TerminalState>) => void
}

export interface TerminalSlice {
  terminal: TerminalState & TerminalActions
}

const initialState: TerminalState = {
  theme: {
    logTextColor: 'green',
    logBackgroundColor: 'rgba(50, 100, 80, 0.5)',
    logBackgroundImage: 'bg-hatch.svg',
    logFontSize: '16px',
    caretColor: 'white',
    caretBlink: false,
    caretBlinkSpeed: 600,
    caretIcon: '🕱',
  },
}

export const createTerminalSlice: StateCreator<TerminalSlice> = (set) => ({
  terminal: {
    ...initialState,
    setState: (props) => {
      set(({ terminal }) => ({
        terminal: {
          ...terminal,
          ...initialState,
          ...props,
        },
      }))
    },
  },
})

export const selectTerminal = (state: TerminalSlice) => state.terminal
