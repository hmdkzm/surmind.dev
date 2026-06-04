export type TextColor =
  | 'default'
  | 'green'
  | 'cyan'
  | 'pink'
  | 'yellow'
  | 'gray'
  | 'black'
  | 'white'
  | 'red'
  | 'blue'
  | 'magenta'
export type FontSize = 'small' | 'normal' | 'large'

export interface TerminalSegment {
  text: string
  color?: TextColor
  fontSize?: FontSize
  bold?: boolean
  italic?: boolean
  underline?: boolean
  href?: string // For clickable links
}

export type TerminalLine = TerminalSegment[]

export type TerminalHistory = TerminalLine[]
