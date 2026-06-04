'use client'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import TerminalInput from './TerminalInput'
import TerminalLog from './TerminalLog'
import { useStore } from '@/provider/storeProvider'
import {
  selectTerminal,
  STORAGE_KEY,
  TerminalState,
} from '@/lib/store/terminalSlice'
import { parser } from '@/lib/terminal/parser'
import DiagModal from '../diag/DiagModal'
import { TerminalLine } from '@/lib/terminal/types'
import { selectMachine } from '@/lib/store/machineSlice'

export default function Terminal() {
  const [logs, setLogs] = useState<(string | TerminalLine)[]>([])
  const [isReady, setIsReady] = useState(false)
  const loadPersistedState = (): Partial<TerminalState> => {
    if (typeof window === 'undefined') return {}
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch (e) {
      return {}
    }
  }
  useEffect(() => {
    setTheme(loadPersistedState())
    setIsReady(true)
  }, [])
  const { theme, diag, setState: setTheme } = useStore(selectTerminal)
  const terminal = useStore(selectTerminal)
  const machine = useStore(selectMachine)
  const prompt =
    (theme.prepend || '') +
    (machine.activeCommand.length > 0 ? `${machine.activeCommand}$` : '')
  const handleInputQuery = (inputQuery: string) => {
    const textWithPrepend = prompt + inputQuery
    const res = parser(inputQuery, terminal, machine)
    if (res) setLogs([...logs, textWithPrepend, ...res])
    else setLogs([...logs, textWithPrepend])
  }

  if (!isReady) return null

  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
      }}
    >
      <TerminalInput
        onEnter={(inputQuery: string) => handleInputQuery(inputQuery)}
      />
      <TerminalLog theme={theme} logs={logs} />
      {diag && <DiagModal />}
    </Box>
  )
}
