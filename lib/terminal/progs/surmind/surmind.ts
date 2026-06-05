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
    chat: () => {
      if (subCommand === 'exit') {
        machine.setMemory('cmd', undefined)
        return [[{ text: 'chat terminated', color: 'gray' }]]
      }
      if (machine.state === 'idle')
        machine.setState({ state: 'run', activeCommand: 'surmind' })
      if (!machine.memory.cmd) machine.setMemory('cmd', 'chat')
      const response: TerminalLine[] = [
        [
          {
            text: 'Well... This is not ready yet. Please wait for a moment :)',
            color: 'yellow',
          },
        ],
      ]
      return response
    },
    help: () => [
      [
        { text: 'Usage: ', color: 'gray' },
        { text: 'surmind [command]', color: 'cyan' },
      ],
      [],
      [{ text: 'Commands:', color: 'pink', bold: true }],
      [
        { text: '  chat    ', color: 'green' },
        { text: '- Start chat with surmind (Not Yet)', color: 'gray' },
      ],
      [
        { text: '  about   ', color: 'green' },
        { text: '- Something about surmind', color: 'gray' },
      ],
      [
        { text: '  links   ', color: 'green' },
        { text: '- Show surmind links and socials', color: 'gray' },
      ],
      [
        { text: '  resume  ', color: 'green' },
        { text: '- Show SURMIND resume', color: 'gray' },
      ],
      [
        { text: '  help    ', color: 'green' },
        { text: '- Show commands help', color: 'gray' },
      ],
      [
        { text: '  exit    ', color: 'green' },
        { text: '- Exit surmind program', color: 'gray' },
      ],
    ],
    about: () => [
      [{ text: 'Surmind is a solution for your frustration', color: 'white' }],
      [{ text: 'Surmind is redemtion', color: 'white' }],
      [{ text: 'Surmind is salvation', color: 'white' }],
      [
        {
          text: 'Join surmind, surmind will join you',
          color: 'pink',
          bold: true,
        },
      ],
    ],
    links: () => surmindLinksBlock,
    resume: () => surmindTerminalResume,
    exit: () => {
      machine.setState({ state: 'idle', activeCommand: '' })
      return []
    },
  }
  if (!machine.memory.cmd && !commands[subCommand])
    return [
      [{ text: 'Invalid Params', color: 'red' }],
      [{ text: 'Usage: surmind [command]', color: 'gray' }],
      [{ text: 'Type "surmind help" for more information', color: 'gray' }],
    ]
  else
    return commands[
      !!machine.memory.cmd ? `${machine.memory.cmd}` : subCommand
    ]()
}
