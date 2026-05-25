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
        backgroundImage: `url(${theme.logBackgroundImage})`,
        backgroundSize: 'cover',
        // position: 'absolute',
        // top: 0,
        // left: '50%',
        // transform: 'translateX(-50%)',
        width: '100%',
        height: '100Vh',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column-reverse',
        fontSize: theme.logFontSize,
        fontFamily: 'monospace',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-all',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100%',
          backgroundColor: theme.logBackgroundColor,
        }}
      ></Box>
      <Box sx={{ zIndex: '99' }}>
        {logs.map((log, index) => (
          <Box key={index}>{log}</Box>
        ))}
      </Box>
    </Box>
  )
}
