import { SxProps } from '@mui/material/styles'

export interface styleType {
  [index: string]: SxProps
}
export type BreakpointsType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}
