import { TerminalSlice } from '@/lib/store/terminalSlice'
import { commands } from './commands'
import { theme } from './theme'

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
  if (subCommand === 'theme') {
    console.log(theme[property])
    terminal.setState({
      theme: { ...terminal.theme, ...theme[property] },
    })
    return ['theme set']
  }
  if (subCommand === 'help') {
    const helpOutput = [
      'Usage: tr [command] [property] [value]',
      '',
      'Commands:',
      '  set <prop> <val> - Set a specific theme property',
      '  theme <name>     - Apply a predefined theme',
      '',
      'Properties (for set):',
      ...Object.keys(commands.set).map(
        (k) => `  ${k.padEnd(4)} -> ${commands.set[k]}`,
      ),
      '',
      'Available Themes:',
      `  •${Object.keys(theme).join(' •')}`,
    ]
    return helpOutput
  }
  return ['type tr help', 'Invalid Params']
}
