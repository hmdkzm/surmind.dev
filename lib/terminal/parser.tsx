import { TerminalSlice } from '../store/terminalSlice'
import { clock } from './progs/clock/clock'
import { ls } from './progs/ls/ls'
import { tr } from './progs/tr/tr'

type CommandHandler = (
  args: string[],
  terminal: TerminalSlice['terminal'],
) => string[]

const COMMAND_MAP: Record<string, CommandHandler> = {
  tr: tr,
  help: () => {
    return ["there's no help for now"]
  },
  clock: clock,
  ls: (args) => ls(Object.keys(COMMAND_MAP), args),
}

export const parser = (prompt: string, terminal: TerminalSlice['terminal']) => {
  const [prog, ...args] = prompt.trim().split(/\s+/)

  const handler = COMMAND_MAP[prog]
  if (handler) {
    const res: string[] = handler(args, terminal).reverse()
    return res
  }

  return ['Not Found']
}
