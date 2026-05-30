import packageJson from '@/package.json'
import { TerminalSlice } from '../store/terminalSlice'
import { clock } from './progs/clock/clock'
import { ls } from './progs/ls/ls'
import { surmind } from './progs/surmind/surmind'
import { tr } from './progs/tr/tr'
import { TerminalLine } from './types'

type CommandHandler = (
  args: string[],
  terminal: TerminalSlice['terminal'],
) => string[] | TerminalLine[]

const COMMAND_MAP: Record<string, CommandHandler> = {
  tr: tr,
  help: () => {
    return [
      `SURMIND DEV [Version ${packageJson.version}]`,
      '(c) Surmind Studio. All rights reserved.',
      '',
      '   _____ _    _ _____  __  __ _____ _   _ _____  ',
      '  / ____| |  | |  __ \\|  \\/  |_   _| \\ | |  __ \\ ',
      ' | (___ | |  | | |__) | \\  / | | | |  \\| | |  | |',
      '  \\___ \\| |  | |  _  /| |\\/| | | | | . ` | |  | |',
      '  ____) | |__| | | \\ \\| |  | |_| |_| |\\  | |__| |',
      ' |_____/ \\____/|_|  \\_\\_|  |_|_____|_| \\_|_____/ ',
      '',
      'Available commands:',
      '  ls      - List available programs and files',
      '  tr      - Manupulate Terminal properties',
      '  clock   - Display system runtime and local time',
      '  surmind - Access core intelligence interface',
      '  help    - Display this manual',
      '',
      'Type a command and press  Enter to execute.',
    ]
  },
  clock: clock,
  ls: (args) => ls(Object.keys(COMMAND_MAP), args),
  surmind: surmind,
}

export const parser = (prompt: string, terminal: TerminalSlice['terminal']) => {
  const [prog, ...args] = prompt.trim().split(/\s+/)

  const handler = COMMAND_MAP[prog]
  if (handler) {
    const res = handler(args, terminal)
    return res
  }

  return ['Not Found']
}
