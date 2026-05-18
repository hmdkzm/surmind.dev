'use client'
import { Box } from '@mui/material'
import { useState } from 'react'

export default function Home() {
  const [cursorBlink, setCursorBlink] = useState(true)
  setTimeout(() => setCursorBlink(!cursorBlink), 600)
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="div"
          sx={{
            fontFamily: 'monospace',
            fontSize: '36px',
            lineHeight: '36px',
            width: '400px',
            minHeight: '60px',
            padding: '12px',
            borderRadius: '5px',
            backgroundColor: 'rgba(125,125,125,0.25)',
          }}
        >
          Terminal
          {cursorBlink && (
            <Box component="span" sx={{ fontSize: '36px' }}>
              🕱
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}
