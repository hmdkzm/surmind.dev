'use client'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import TerminalInput from './TerminalInput'
import TerminalLog from './TerminalLog'
import { useStore } from '@/provider/storeProvider'
import { selectTerminal } from '@/lib/store/terminalSlice'
import { parser } from '@/lib/terminal/parser'

export default function Terminal() {
  const [inputCharsArray, setInputCharsArray] = useState<string[]>([])
  const [logs, setLogs] = useState<string[]>([])
  const [caretIndex, setCaretIndex] = useState(0)
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  //TODO-improve this section
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
      const command = inputCharsArray.join('')
      const textWithPrepend = theme.prepend + command
      const res = parser(command, terminal)
      if (res) setLogs([...logs, textWithPrepend, ...res])
      else setLogs([...logs, textWithPrepend])
      if (command.trim()) setHistory([...history, command])
      setHistoryIndex(-1)
      _inputCharsArray.splice(0)
      setCaretIndex(0)
    }
    setInputCharsArray(_inputCharsArray)
    // console.log(e)
  }
  useEffect(() => {
    document.addEventListener('keydown', getKey)
    document.addEventListener('paste', handlePaste)
    return () => {
      document.removeEventListener('keydown', getKey)
      document.removeEventListener('paste', handlePaste)
    }
  })
  const { theme } = useStore(selectTerminal)
  const terminal = useStore(selectTerminal)
  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <TerminalInput
        chars={inputCharsArray}
        caretIndex={caretIndex}
        theme={theme}
      />
      <TerminalLog theme={theme} logs={logs} />
    </Box>
  )
}
