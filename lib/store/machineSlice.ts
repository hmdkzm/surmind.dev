import { StateCreator } from 'zustand'
type SystemState = 'idle' | 'run' | 'error'
type Command = string
interface MachineState {
  state: SystemState
  activeCommand: Command
  memory: Record<string, unknown>
}

interface MachineActions {
  setState: (props: Partial<MachineState>) => void
  setMemory: (programId: string, data: unknown) => void
}

export interface MachineSlice {
  machine: MachineState & MachineActions
}

const initialState: MachineState = {
  state: 'idle',
  activeCommand: '',
  memory: {},
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
    setMemory: (programId, data) => {
      set(({ machine }) => ({
        machine: {
          ...machine,
          memory: {
            ...machine.memory,
            [programId]: data,
          },
        },
      }))
    },
  },
})

export const selectMachine = (state: MachineSlice) => state.machine
