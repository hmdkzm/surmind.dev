import { TerminalSlice } from '../store/terminalSlice'
import { commands } from './commands'

type CommandHandler = (
  args: string[],
  terminal: TerminalSlice['terminal'],
) => string[] | string | void

const COMMAND_MAP: Record<string, CommandHandler> = {
  tr: (args, terminal) => {
    const [subCommand, property, value] = args
    if (subCommand === 'set') {
      if (commands.set[property]) {
        terminal.setState({
          theme: { ...terminal.theme, [commands.set[property]]: value },
        })
        return
      }
      return ['type tr help', 'Invalid Params']
    }
  },
  help: () => {
    return "there's no help for now"
  },
  clock: () => {
    return [new Date().toDateString() + ' ' + new Date().toLocaleTimeString()]
  },
}

export const parser = (prompt: string, terminal: TerminalSlice['terminal']) => {
  const [prog, ...args] = prompt.trim().split(/\s+/)

  const handler = COMMAND_MAP[prog]
  if (handler) {
    return handler(args, terminal)
  }

  return ['Not Found']
}
