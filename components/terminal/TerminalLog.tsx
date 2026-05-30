import { TerminalTheme } from '@/lib/store/terminalSlice'
import { TerminalLine } from '@/lib/terminal/types'
import Box from '@mui/material/Box'

export default function TerminalLog({
  logs,
  theme,
}: {
  logs: (string | TerminalLine)[]
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
        {logs.map((log, index) => {
          if (typeof log === 'string') {
            return (
              <Box
                key={index}
                sx={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                }}
              >
                {log}
              </Box>
            )
          } else {
            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                {log.map((segment, segIndex) => (
                  <Box
                    key={segIndex}
                    sx={{
                      color: segment.color || theme.logTextColor,
                      fontSize: segment.fontSize
                        ? segment.fontSize === 'small'
                          ? '0.8em'
                          : segment.fontSize === 'large'
                            ? '1.2em'
                            : theme.logFontSize
                        : theme.logFontSize,
                      fontWeight: segment.bold ? 'bold' : 'normal',
                      fontStyle: segment.italic ? 'italic' : 'normal',
                      textDecoration: segment.underline ? 'underline' : 'none',
                      cursor: segment.href ? 'pointer' : 'default',
                    }}
                    onClick={() => {
                      if (segment.href) {
                        window.open(segment.href, '_blank')
                      }
                    }}
                  >
                    {segment.text}
                  </Box>
                ))}
              </Box>
            )
          }
        })}
      </Box>
    </Box>
  )
}
