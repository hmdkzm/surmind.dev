import { StateCreator } from 'zustand'

interface MachineState {}

interface MachineActions {
  setState: (props: Partial<MachineState>) => void
}

export interface MachineSlice {
  machine: MachineState & MachineActions
}

const initialState: MachineState = {}

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
