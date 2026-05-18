// app/(app)/not-found.tsx
import Box from '@mui/material/Box'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
      }}
    >
      <h2>404 - Art Piece Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Box>
  )
}
