import { CommandHandler } from '../../parser'
import { TerminalLine } from '../../types'
import { surmindLinksBlock } from './linksText'
import { surmindTerminalResume } from './resume'

export const surmind: CommandHandler = (args: string[], terminal, machine) => {
  if (!args.length) {
    machine.setState({ state: 'run', activeCommand: 'surmind' })
    return [[{ text: 'surmind > ', color: 'gray' }]]
  }
  const [subCommand, property, value] = args
  const commands: { [index: string]: () => string[] | TerminalLine[] } = {
    chat: () => ['Well... This is not ready yet. Please wait for a moment :)'],
    help: () => [
      '    chat: start chat with seurmind. (Not Yet)',
      '    about: something about surmind',
      '    links: show surmind links and socials',
      '    resume: show SURMIND resume',
      '    help: show commands help',
    ],
    about: () => [
      'Surmind is a solution for your frustration',
      'Surmind is redemtion',
      'Surmind is salvation',
      'Join surmind, surmind will join you',
    ],
    links: () => surmindLinksBlock,
    resume: () => surmindTerminalResume,
    exit: () => {
      machine.setState({ state: 'idle', activeCommand: '' })
      return []
    },
  }
  if (!commands[subCommand]) return ['type surmind help', 'Invalid Params']
  else return commands[subCommand]()
}
