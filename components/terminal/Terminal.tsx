'use client'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import TerminalInput from './TerminalInput'
import TerminalLog from './TerminalLog'
import { useStore } from '@/provider/storeProvider'
import { selectTerminal } from '@/lib/store/terminalSlice'

export default function Terminal() {
  const [inputCharsArray, setInputCharsArray] = useState<string[]>([])
  const [logs, setLogs] = useState<string[]>([])
  const [caretIndex, setCaretIndex] = useState(0)
  //TODO-improve this section
  const getKey = (e: KeyboardEvent) => {
    const _inputCharsArray = inputCharsArray
    const { key } = e
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
    } else if (key === 'Enter') {
      setLogs([inputCharsArray.join(''), ...logs])
      if (inputCharsArray.join('') === 'update') {
        updateTheme()
      }
      _inputCharsArray.splice(0)
      setCaretIndex(0)
    }
    setInputCharsArray(_inputCharsArray)
    // console.log(e)
  }
  useEffect(() => {
    document.addEventListener('keydown', getKey)
    return () => {
      document.removeEventListener('keydown', getKey)
    }
  })
  const { theme } = useStore(selectTerminal)
  const terminal = useStore(selectTerminal)

  const updateTheme = () => {
    terminal.setState({
      theme: {
        logBackgroundColor: 'black',
        logTextColor: 'white',
        logBackgroundImage: 'bg-hatch.svg',
        logFontSize: '36px',
      },
    })
  }
  return (
    <Box
      sx={{
        height: '100vh',
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
