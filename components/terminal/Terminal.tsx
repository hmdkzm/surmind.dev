'use client'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import TerminalInput from './TerminalInput'
import TerminalLog from './TerminalLog'
import { useStore } from '@/provider/storeProvider'
import { selectTerminal } from '@/lib/store/terminalSlice'
import { parser } from '@/lib/terminal/parser'
import DiagModal from '../diag/DiagModal'
import { TerminalLine } from '@/lib/terminal/types'
import { selectMachine } from '@/lib/store/machineSlice'

export default function Terminal() {
  const [logs, setLogs] = useState<(string | TerminalLine)[]>([])
  const handleInputQuery = (inputQuery: string) => {
    const textWithPrepend = theme.prepend + inputQuery
    const res = parser(inputQuery, terminal, machine)
    if (res) setLogs([...logs, textWithPrepend, ...res])
    else setLogs([...logs, textWithPrepend])
  }
  useEffect(() => {}, [logs])
  const { theme, diag } = useStore(selectTerminal)
  const terminal = useStore(selectTerminal)
  const machine = useStore(selectMachine)
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
