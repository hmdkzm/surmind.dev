import Box from '@mui/material/Box'

export default function TerminalLog({ logs }: { logs: string[] }) {
  return (
    <Box
      sx={{
        overflowY: 'auto',
        backgroundColor: 'rgba(100, 250, 120, 0.5)',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100Vh',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
    >
      {logs.map((log, index) => (
        <Box key={index}>{log}</Box>
      ))}
    </Box>
  )
}
