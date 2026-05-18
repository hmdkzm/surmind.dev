'use client'
import { breakpoints, palette } from '@/utils/consts'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    ...palette['dark'],
  },
  breakpoints: {
    values: breakpoints,
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme
