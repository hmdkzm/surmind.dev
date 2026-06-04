import { selectMachine } from '@/lib/store/machineSlice'
import { selectTerminal } from '@/lib/store/terminalSlice'
import { useStore } from '@/provider/storeProvider'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'

export default function DiagModal() {
  const { theme } = useStore(selectTerminal)
  const { state, activeCommand } = useStore(selectMachine)
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '50px',
        bottom: '50px',
        width: '300px',
        height: '350px',
        color: theme.logTextColor,
        backgroundColor: theme.inputBackgroundColor,
        filter: 'invert()',
        border: '1px solid',
        borderColor: 'white',
        borderRadius: '5px',
        padding: '0px',
      }}
    >
      <Stack sx={{ filter: 'invert()' }}>
        <ListItem>system state: {state}</ListItem>
        <ListItem>active command: {activeCommand}</ListItem>
        <ListItem>theme name: {theme.name}</ListItem>
      </Stack>
    </Box>
  )
}
