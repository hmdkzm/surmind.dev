import { SxProps } from '@mui/material/styles'

export const glowOnHover: SxProps = {
  transition: 'box-shadow 0.3s ease-in-out,border-color 0.3s ease-in-out',
  '&:hover': {
    borderColor: 'white',
    boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.6)',
  },
}

export const centeredFlex: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const paperBackgroundColor = 'rgba(16, 16, 16, 0.96)'
export const paperBorderColor = 'rgba(255,255, 255, 0.1)'
