//TODO-check caret blink and positioning system
import { TerminalTheme } from '@/lib/store/terminalSlice'
import Box from '@mui/material/Box'
import { useState } from 'react'

export default function TerminalInput({
  chars,
  caretIndex,
  theme,
}: {
  chars: string[]
  caretIndex: number
  theme: TerminalTheme
}) {
  const [isCaretVisible, setIsCaretVisible] = useState(true)
  const caretTopOfset = 10
  const caretLeftOfset = 38
  const charWidth = 21.65
  const charHeight = 36
  const charsNumber = 35
  if (theme.caretBlink) {
    setTimeout(() => {
      setIsCaretVisible(!isCaretVisible)
    }, theme.caretBlinkSpeed)
  }
  const calculateInputPosition = () => {
    const position = theme.inputPosition
    if (position === 'top') return '50px'
    if (position === 'center') return '50%'
    if (position === 'bottom') return '90%'
    return '50%'
  }
  return (
    <Box
      component="div"
      sx={{
        zIndex: 99,
        position: 'relative',
        top: calculateInputPosition(),
        left: '50%',
        transform: 'translate3D(-50%, 0, 0)',
        wordBreak: 'break-all',
        whiteSpace: 'break-spaces',
        fontFamily: 'monospace',
        fontSize: theme.inputFontSize || '36px',
        lineHeight: '36px',
        color: theme.inputTextColor,
        width: '783px',
        minHeight: '60px',
        padding: '12px',
        borderRadius: '5px',
        backgroundColor:
          theme.inputBackgroundColor || 'rgba(255, 255, 255, 0.125)',
        backgroundImage:
          theme.inputBackgroundImage && `url(${theme.inputBackgroundImage})`,
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          color: theme.caretColor,
          position: 'absolute',
          top:
            caretTopOfset +
            charHeight * Math.floor(caretIndex / charsNumber) +
            2,
          left:
            caretLeftOfset +
            charWidth *
              (caretIndex -
                Math.floor(caretIndex / charsNumber) * charsNumber) -
            12,
        }}
      >
        {!theme.caretBlink || isCaretVisible ? theme.caretIcon : ' '}
      </Box>
      {'>' + chars.join('')}
    </Box>
  )
}
