//TODO-check caret blink and positioning system
//TODO-update scroll position with caret position
import { selectTerminal } from '@/lib/store/terminalSlice'
import Box from '@mui/material/Box'
import { useState, useEffect, useRef } from 'react'
import { useStore } from '@/provider/storeProvider'
import Caret from './Caret'

export default function TerminalInput({
  onEnter,
}: {
  onEnter: (a: string) => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { theme } = useStore(selectTerminal)
  const [inputCharsArray, setInputCharsArray] = useState<string[]>([])
  const [caretIndex, setCaretIndex] = useState(0)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const handlePaste = (e: ClipboardEvent) => {
    const pastedText = e.clipboardData?.getData('text') || ''
    if (pastedText) {
      const _inputCharsArray = [...inputCharsArray]
      _inputCharsArray.splice(caretIndex, 0, ...pastedText.split(''))
      setInputCharsArray(_inputCharsArray)
      setCaretIndex(caretIndex + pastedText.length)
    }
  }
  const getKey = (e: KeyboardEvent) => {
    if (!isInputFocused) return
    const _inputCharsArray = [...inputCharsArray]
    const { key } = e
    if (e.ctrlKey || e.metaKey) return
    if (!(key.length > 1)) {
      setCaretIndex(caretIndex + 1)
      _inputCharsArray.splice(caretIndex, 0, key)
    } else if (key === 'Backspace') {
      setCaretIndex(caretIndex > 0 ? caretIndex - 1 : 0)
      _inputCharsArray.splice(caretIndex - 1, 1)
    } else if (key === 'ArrowLeft') {
      setCaretIndex(caretIndex > 0 ? caretIndex - 1 : 0)
    } else if (key === 'ArrowRight') {
      setCaretIndex(
        caretIndex < inputCharsArray.length
          ? caretIndex + 1
          : inputCharsArray.length,
      )
    } else if (key === 'End') {
      setCaretIndex(inputCharsArray.length)
    } else if (key === 'Delete') {
      _inputCharsArray.splice(caretIndex, 1)
    } else if (key === 'ArrowUp') {
      const newIndex = historyIndex + 1
      if (newIndex < history.length) {
        const historicalCmd = history[history.length - 1 - newIndex]
        _inputCharsArray.splice(
          0,
          _inputCharsArray.length,
          ...historicalCmd.split(''),
        )
        setHistoryIndex(newIndex)
        setCaretIndex(historicalCmd.length)
      }
    } else if (key === 'ArrowDown') {
      const newIndex = historyIndex - 1
      if (newIndex >= 0) {
        const historicalCmd = history[history.length - 1 - newIndex]
        _inputCharsArray.splice(
          0,
          _inputCharsArray.length,
          ...historicalCmd.split(''),
        )
        setHistoryIndex(newIndex)
        setCaretIndex(historicalCmd.length)
      } else if (newIndex === -1) {
        _inputCharsArray.splice(0)
        setHistoryIndex(-1)
        setCaretIndex(0)
      }
    } else if (key === 'Enter') {
      const inputQuery = inputCharsArray.join('')
      onEnter(inputQuery)
      if (inputQuery.trim()) setHistory([...history, inputQuery])
      setHistoryIndex(-1)
      _inputCharsArray.splice(0)
      setCaretIndex(0)
    }
    setInputCharsArray(_inputCharsArray)
    // console.log(e)
  }
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
    document.addEventListener('keydown', getKey)
    document.addEventListener('paste', handlePaste)
    return () => {
      document.removeEventListener('keydown', getKey)
      document.removeEventListener('paste', handlePaste)
    }
  })

  const inputPadding = 12
  const inputWidth = 800
  const scrolbarWidth = 15
  const fontSize = parseInt(String(theme.inputFontSize || '36'))
  const charWidth = fontSize * 0.6 // Monospace characters are typically 0.6 times the font size in width
  const lineHeight = 36
  const charHeight = lineHeight
  const rowCharsNumber = Math.floor((inputWidth - inputPadding * 2) / charWidth)

  const getInputPositionStyles = () => {
    const position = theme.inputPosition
    if (position === 'top') return { top: '50px' }
    if (position === 'bottom') return { bottom: '50px' }
    return {
      top: '50%',
      transform: 'translate3D(-50%, -50%, 0)',
    }
  }
  const handleFocus = () => {
    if (scrollRef.current) {
      scrollRef.current.focus()
      scrollRef.current.tabIndex = 1
    }
  }
  const handleOnFocus = () => {
    setIsInputFocused(true)
  }
  const handleOnBlur = () => {
    setIsInputFocused(false)
  }
  return (
    <Box
      component="div"
      ref={scrollRef}
      onClick={handleFocus}
      tabIndex={0}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      sx={{
        ['&:focus']: {
          boxShadow: `0px 0px 16px 4px ${theme.inputBackgroundColor}`,
          outline: `1px solid ${theme.inputBackgroundColor}`,
        },
        [':hover:not(:focus)']: { opacity: 0.9 },
        cursor: 'text',
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
          (Math.floor((inputCharsArray.length + 1) / rowCharsNumber) + 1) *
            lineHeight +
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
      <Caret
        top={
          inputPadding +
          charHeight *
            Math.floor(
              (caretIndex + (theme.prepend?.length || 0)) / rowCharsNumber,
            ) +
          2
        }
        left={
          inputPadding +
          charWidth *
            ((caretIndex + (theme.prepend?.length || 0)) % rowCharsNumber)
        }
        blink={isInputFocused}
        icon={theme.caretIcon}
        color={theme.caretColor}
      />
      <Box sx={{ maxWidth: `${inputWidth - inputPadding * 2}px` }}>
        {theme.prepend + inputCharsArray.join('')}
      </Box>
    </Box>
  )
}
