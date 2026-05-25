//TODO-check caret blink and positioning system
//TODO-update scroll position with caret position
import { TerminalTheme } from '@/lib/store/terminalSlice'
import Box from '@mui/material/Box'
import { useState, useEffect, useRef } from 'react'

export default function TerminalInput({
  chars,
  caretIndex,
  theme,
}: {
  chars: string[]
  caretIndex: number
  theme: TerminalTheme
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [chars])

  const [isCaretVisible, setIsCaretVisible] = useState(true)
  const inputPadding = 12
  const inputWidth = 800
  const scrolbarWidth = 15
  const fontSize = parseInt(String(theme.inputFontSize || '36'))
  const charWidth = fontSize * 0.6 // Monospace characters are typically 0.6 times the font size in width
  const lineHeight = 36
  const charHeight = lineHeight
  const rowCharsNumber = Math.floor((inputWidth - inputPadding * 2) / charWidth)
  if (theme.caretBlink) {
    setTimeout(() => {
      setIsCaretVisible(!isCaretVisible)
    }, theme.caretBlinkSpeed)
  }
  const getInputPositionStyles = () => {
    const position = theme.inputPosition
    if (position === 'top') return { top: '50px' }
    if (position === 'bottom') return { bottom: '50px' }
    return {
      top: '50%',
      transform: 'translate3D(-50%, -50%, 0)',
    }
  }

  return (
    <Box
      component="div"
      ref={scrollRef}
      sx={{
        zIndex: 99,
        position: 'absolute',
        left: '50%',
        transform: 'translate3D(-50%, 0, 0)',
        ...getInputPositionStyles(),
        wordBreak: 'break-all',
        whiteSpace: 'break-spaces',
        fontFamily: 'monospace',
        fontSize: theme.inputFontSize || '36px',
        lineHeight: `${lineHeight}px`,
        color: theme.inputTextColor,
        width: `${inputWidth + scrolbarWidth}px`,
        height:
          (Math.floor((chars.length + 1) / rowCharsNumber) + 1) * lineHeight +
          inputPadding * 2,
        minHeight: '60px',
        maxHeight: `${lineHeight * 5 + inputPadding * 2}px`,
        overflowY: 'auto',
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
      <Box sx={{ maxWidth: `${inputWidth - inputPadding * 2}px` }}>
        {theme.prepend + chars.join('')}
      </Box>
    </Box>
  )
}
