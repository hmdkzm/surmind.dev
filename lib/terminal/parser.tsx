import { MachineSlice } from '../store/machineSlice'
import { TerminalSlice } from '../store/terminalSlice'
import { clock } from './progs/clock/clock'
import { help } from './progs/help/help'
import { ls } from './progs/ls/ls'
import { surmind } from './progs/surmind/surmind'
import { tr } from './progs/tr/tr'
import { TerminalLine } from './types'

export type CommandHandler = (
  args: string[],
  terminal: TerminalSlice['terminal'],
  machine: MachineSlice['machine'],
) => string[] | TerminalLine[]

const COMMAND_MAP: Record<string, CommandHandler> = {
  tr: tr,
  help: help,
  clock: clock,
  ls: (args) => ls(Object.keys(COMMAND_MAP), args),
  surmind: surmind,
}

export const parser = (
  prompt: string,
  terminal: TerminalSlice['terminal'],
  machine: MachineSlice['machine'],
) => {
  const { activeCommand, state } = machine
  if (state === 'run') {
    const handler = COMMAND_MAP[activeCommand]
    if (handler) {
      const args = prompt.trim().split(/\s+/)
      const res = handler(args, terminal, machine)
      return res
    }
  }
  const [prog, ...args] = prompt.trim().split(/\s+/)
  const handler = COMMAND_MAP[prog]
  if (handler) {
    const res = handler(args, terminal, machine)
    return res
  }

  return ['Not Found']
}
