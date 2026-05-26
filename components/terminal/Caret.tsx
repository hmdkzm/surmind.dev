import Box from '@mui/material/Box'
import { useState } from 'react'

export default function Caret({
  top,
  left,
  blink,
  icon = '|',
  speed = 500,
  color = 'white',
}: {
  top: number
  left: number
  blink: boolean
  icon?: string
  speed?: number
  color?: string
}) {
  const [isCaretVisible, setIsCaretVisible] = useState(true)
  if (blink) {
    setTimeout(() => {
      setIsCaretVisible(!isCaretVisible)
    }, speed)
  }
  return (
    <Box
      sx={{
        zIndex: -1,
        color: color,
        position: 'absolute',
        top: top,
        left: left,
      }}
    >
      {!blink || isCaretVisible ? icon : ' '}
    </Box>
  )
}
