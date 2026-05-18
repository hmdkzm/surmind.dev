'use client'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Temo() {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: '#101010',
        height: 'calc(100vh - 6rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h1">Surmind Studio</Typography>
        <Typography variant="h2">
          Visual Art | Web Experiences | Indie Game Concepts
        </Typography>
        <Typography sx={{ pt: 16 }} variant="h6">
          Coming Soon...
        </Typography>
      </Stack>
    </Box>
  )
}
