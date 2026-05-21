import { TerminalSlice } from '../store/terminalSlice'
import { commands } from './commands'

export const parser = (prompt: string, terminal: TerminalSlice['terminal']) => {
  const [prog, command, ...args] = prompt.split(' ')
  if (prog === 'tr') {
    if (command === 'set') {
      const [property, value] = args
      if (commands.set[property]) {
        terminal.setState({
          theme: { ...terminal.theme, [commands.set[property]]: value },
        })
      } else {
        return ['type tr help', 'Invalid Params']
      }
      return
    }
  }
  if (prog === 'help') {
    return "there's no help for now"
  }
  if (prog === 'clock') {
    return [new Date().toDateString() + ' ' + new Date().toLocaleTimeString()]
  }
  return ['Not Found']
}
