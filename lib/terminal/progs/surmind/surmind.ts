import { links } from './linksText'
import { resume } from './resume'

export const surmind = (args: string[]) => {
  const [subCommand, property, value] = args
  const commands: { [index: string]: () => string[] } = {
    chat: () => ['chatting dala la'],
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
    links: () => links,
    resume: () => resume.split('\n'),
  }
  if (!commands[subCommand]) return ['type surmind help', 'Invalid Params']
  else return commands[subCommand]()
}
