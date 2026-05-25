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
  const inputPadding = 12
  const inputWidth = 783
  const fontSize = parseInt(String(theme.inputFontSize || '36'))
  const charWidth = fontSize * 0.6 // Monospace characters are typically 0.6 times the font size in width
  const lineHeight = 36
  const charHeight = lineHeight
  const prependWidth = (theme.prepend?.length || 0) * charWidth
  const rowCharsNumber = Math.floor((inputWidth - inputPadding * 2) / charWidth)
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
        position: 'absolute',
        top: calculateInputPosition(),
        left: '50%',
        transform: 'translate3D(-50%, 0, 0)',
        wordBreak: 'break-all',
        whiteSpace: 'break-spaces',
        fontFamily: 'monospace',
        fontSize: theme.inputFontSize || '36px',
        lineHeight: `${lineHeight}px`,
        color: theme.inputTextColor,
        width: `${inputWidth}px`,
        minHeight: '60px',
        padding: `${inputPadding}px`,
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
            inputPadding +
            charHeight *
              Math.floor(
                (caretIndex + (theme.prepend?.length || 0)) / rowCharsNumber,
              ) +
            2,
          left:
            inputPadding +
            charWidth *
              ((caretIndex + (theme.prepend?.length || 0)) % rowCharsNumber),
        }}
      >
        {!theme.caretBlink || isCaretVisible ? theme.caretIcon : ' '}
      </Box>
      {theme.prepend + chars.join('')}
    </Box>
  )
}
