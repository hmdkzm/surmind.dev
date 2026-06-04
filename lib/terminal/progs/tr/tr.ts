import { commands } from './commands'
import { theme } from './theme'
import { CommandHandler } from '../../parser'
import { TerminalLine } from '../../types'

export const tr: CommandHandler = (args: string[], terminal, machine) => {
  if (!args.length) {
    machine.setState({ state: 'run', activeCommand: 'tr' })
    return [[{ text: 'tr > ', color: 'gray' }]]
  }

  const [subCommand, property, value] = args

  const trCommands: { [index: string]: () => string[] | TerminalLine[] } = {
    set: () => {
      if (commands.set[property]) {
        terminal.setState({
          theme: { ...terminal.theme, [commands.set[property]]: value },
        })
        return ['set']
      }
      return ['type tr help', 'Invalid Property']
    },
    theme: () => {
      if (!theme[property]) {
        return [[{ text: 'Invalid Theme Name', color: 'red' }]]
      }
      terminal.setState({
        theme: { ...terminal.theme, ...theme[property] },
      })
      return [[{ text: 'Theme Applied', color: 'green' }]]
    },
    diag: () => {
      if (property === 'on' || property === 'off') {
        terminal.setState({
          theme: { ...terminal.theme },
          diag: property === 'on',
        })
        return [`diag ${property === 'on' ? 'activated' : 'deactivated'}`]
      }
      return ['type tr help', 'Invalid Params']
    },
    help: () => [
      'Usage: tr [command] [property] [value]',
      '',
      'Commands:',
      '  set <prop> <val> - Set a specific theme property',
      '  theme <name>     - Apply a predefined theme',
      '  diag <on|off>    - Toggle diagnostic modal',
      '',
      'Properties (for set):',
      ...Object.keys(commands.set).map(
        (k) => `  ${k.padEnd(4)} -> ${commands.set[k]}`,
      ),
      '',
      'Available Themes:',
      `  •${Object.keys(theme).join(' •')}`,
    ],
    exit: () => {
      machine.setState({ state: 'idle', activeCommand: '' })
      return []
    },
  }

  if (!trCommands[subCommand]) return ['type tr help', 'Invalid Params']
  else return trCommands[subCommand]()
}
