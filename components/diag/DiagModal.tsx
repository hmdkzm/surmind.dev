import { selectMachine } from '@/lib/store/machineSlice'
import { selectTerminal } from '@/lib/store/terminalSlice'
import { useStore } from '@/provider/storeProvider'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'

export default function DiagModal() {
  const { theme } = useStore(selectTerminal)
  const { state, activeCommand, memory } = useStore(selectMachine)
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '50px',
        bottom: '50px',
        width: '300px',
        height: '350px',
        color: 'rgba(255, 255, 255, 0.5)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '5px',
        padding: '0px',
      }}
    >
      <Stack>
        <ListItem>system state: {state}</ListItem>
        <ListItem>active command: {activeCommand}</ListItem>
        <ListItem>memory: {JSON.stringify(memory)}</ListItem>
        <ListItem>theme name: {theme.name}</ListItem>
      </Stack>
    </Box>
  )
}
