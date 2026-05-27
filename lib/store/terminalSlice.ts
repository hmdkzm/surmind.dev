import { StateCreator } from 'zustand'

export interface TerminalTheme {
  [index: string]: string | undefined | boolean | number
  logTextColor?: string
  logBackgroundColor?: string
  logBackgroundImage?: string
  logFontSize?: number
  inputTextColor?: string
  inputBackgroundColor?: string
  inputBackgroundImage?: string
  inputFontSize?: number
  inputPosition?: 'top' | 'center' | 'bottom'
  caretColor?: string
  caretIcon?: string
  caretBlink?: boolean
  caretBlinkSpeed?: number
  prepend?: string
}
interface TerminalState {
  theme: TerminalTheme
  diag: boolean
}

interface TerminalActions {
  setState: (props: Partial<TerminalState>) => void
}

export interface TerminalSlice {
  terminal: TerminalState & TerminalActions
}
//TODO-check nestet state reactivity issue
const initialState: TerminalState = {
  theme: {
    logTextColor: '#00b700',
    logBackgroundColor: 'rgba(50, 100, 80, 0.5)',
    logBackgroundImage: 'bg-hatch.svg',
    logFontSize: 16,
    inputTextColor: 'white',
    inputBackgroundColor: 'rgba(250,250,250,0.5)',
    inputBackgroundImage: '',
    inputFontSize: 24,
    inputPosition: 'top',
    caretColor: 'white',
    caretBlink: true,
    caretBlinkSpeed: 600,
    caretIcon: '🕱',
    prepend: '>',
  },
  diag: false,
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
