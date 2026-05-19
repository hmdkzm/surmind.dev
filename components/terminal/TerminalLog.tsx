import { TerminalTheme } from '@/lib/store/terminalSlice'
import Box from '@mui/material/Box'

export default function TerminalLog({
  logs,
  theme,
}: {
  logs: string[]
  theme: TerminalTheme
}) {
  return (
    <Box
      sx={{
        overflowY: 'auto',
        color: theme.logTextColor,
        backgroundColor: theme.logBackgroundColor,
        backgroundImage: `url(${theme.logBackgroundImage})`,
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100Vh',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column-reverse',
        fontSize: theme.logFontSize,
        whiteSpace: 'break-spaces',
        wordBreak: 'break-all',
      }}
    >
      {logs.map((log, index) => (
        <Box key={index}>{log}</Box>
      ))}
    </Box>
  )
}
