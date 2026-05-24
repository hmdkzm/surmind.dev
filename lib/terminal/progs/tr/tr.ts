import { TerminalSlice } from '@/lib/store/terminalSlice'
import { commands } from './commands'

export const tr = (args: string[], terminal: TerminalSlice['terminal']) => {
  const [subCommand, property, value] = args
  if (subCommand === 'set') {
    if (commands.set[property]) {
      terminal.setState({
        theme: { ...terminal.theme, [commands.set[property]]: value },
      })
      return ['set']
    }
  }
  if (subCommand === 'help') {
    const commandsList = Object.keys(commands)
      .map((c) => [
        `${c}:`,
        ...Object.keys(commands[c]).map((d) => `    ${d}: ${commands[c][d]}`),
      ])
      .flat(1)
    console.log(commandsList.flat(1))
    return commandsList
  }
  return ['type tr help', 'Invalid Params']
}
