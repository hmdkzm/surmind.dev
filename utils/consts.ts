//TODO-handle consts organization
import { grey } from '@mui/material/colors'
import { Breakpoints, BreakpointsType } from './types'
import { PaletteOptions } from '@mui/material/styles'

export const APP_NAME = 'Surmind Studio'
export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1436,
}
export const preferedBreakpoint: BreakpointsType = 'md'

export const palette: { dark: PaletteOptions } = {
  dark: {
    mode: 'dark',
    primary: {
      main: grey[300], // A much lighter, more active-looking grey
      contrastText: '#000000', // Black text for readability on a light grey button
    },
    secondary: {
      main: grey[800],
    },
    background: {
      default: '#101010',
      paper: '#161616', // Corrected from 'rga' and adjusted for a slightly lighter paper
    },
    text: {
      primary: grey[200],
      secondary: grey[400],
    },
    action: {
      // Use a very dark grey for the disabled background
      disabledBackground: grey[900],
      // Use a mid-grey for the disabled text to have some contrast
      disabled: grey[700],
    },
  },
}
