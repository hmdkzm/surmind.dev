import { StateCreator } from 'zustand'
type SystemState = 'idle' | 'run' | 'error'
type Command = string
interface MachineState {
  state: SystemState
  activeCommand: Command
}

interface MachineActions {
  setState: (props: Partial<MachineState>) => void
}

export interface MachineSlice {
  machine: MachineState & MachineActions
}

const initialState: MachineState = {
  state: 'idle',
  activeCommand: '',
}

export const createMachineSlice: StateCreator<MachineSlice> = (set) => ({
  machine: {
    ...initialState,
    setState: (props) => {
      set(({ machine }) => ({
        machine: {
          ...machine,
          ...initialState,
          ...props,
        },
      }))
    },
  },
})

export const selectMachine = (state: MachineSlice) => state.machine
