//TODO-check caret blink and positioning system
import Box from '@mui/material/Box'
import { useState } from 'react'

export default function TerminalInput({
  chars,
  caretIndex,
  caret,
}: {
  chars: string[]
  caretIndex: number
  caret: string
}) {
  const [isCaretVisible, setIsCaretVisible] = useState(true)
  const caretTopOfset = 10
  const caretLeftOfset = 38
  const charWidth = 21.65
  const charHeight = 36
  setTimeout(() => {
    setIsCaretVisible(!isCaretVisible)
  }, 500)
  return (
    <Box
      component="div"
      sx={{
        position: 'relative',
        wordBreak: 'break-all',
        whiteSpace: 'break-spaces',
        fontFamily: 'monospace',
        fontSize: '36px',
        lineHeight: '36px',
        width: '783px',
        minHeight: '60px',
        padding: '12px',
        borderRadius: '5px',
        backgroundColor: 'rgba(125,125,125,0.25)',
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          color: 'red',
          position: 'absolute',
          top: caretTopOfset + charHeight * Math.floor(caretIndex / 35) + 2,
          left:
            caretLeftOfset +
            charWidth * (caretIndex - Math.floor(caretIndex / 35) * 35) -
            12,
        }}
      >
        {true ? caret : ' '}
      </Box>
      {'>' + chars.join('')}
    </Box>
  )
}
