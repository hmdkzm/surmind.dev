import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function useMatchMedia(breakpoint: Breakpoint): boolean {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down(breakpoint))
  return matches
}
