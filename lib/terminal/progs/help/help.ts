import packageJson from '@/package.json'
import { TerminalLine } from '../../types'
export const help = (): TerminalLine[] => {
  return [
    [{ text: `SURMIND DEV [Version ${packageJson.version}]` }],
    [{ text: '(c) Surmind Studio. All rights reserved.' }],
    [{ text: '' }],
    [{ text: '   _____ _    _ _____  __  __ _____ _   _ _____  ' }],
    [{ text: '  / ____| |  | |  __ \\|  \\/  |_   _| \\ | |  __ \\ ' }],
    [{ text: ' | (___ | |  | | |__) | \\  / | | | |  \\| | |  | |' }],
    [{ text: '  \\___ \\| |  | |  _  /| |\\/| | | | | . ` | |  | |' }],
    [{ text: '  ____) | |__| | | \\ \\| |  | |_| |_| |\\  | |__| |' }],
    [{ text: ' |_____/ \\____/|_|  \\_\\_|  |_|_____|_| \\_|_____/ ' }],
    [{ text: '' }],
    [{ text: 'Available commands:', color: 'yellow', bold: true }],
    [
      { text: '  ls', color: 'green' },
      { text: '      - List available programs and files' },
    ],
    [
      { text: '  tr', color: 'green' },
      { text: '      - Manupulate Terminal properties' },
    ],
    [
      { text: '  clock', color: 'green' },
      { text: '   - Display system runtime and local time' },
    ],
    [
      { text: '  surmind', color: 'green' },
      { text: ' - Access core intelligence interface' },
    ],
    [{ text: '  help', color: 'green' }, { text: '    - Display this manual' }],
    [{ text: '' }],
    [{ text: 'Type a command and press  Enter to execute.' }],
  ]
}
