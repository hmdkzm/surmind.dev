import Box from '@mui/material/Box'
import { SvgPattern } from './SvgPattern'
import { styleType } from '@/utils/types'

export default function SvgBackground() {
  const style: styleType = {
    backGround: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#101010',

      zIndex: -1,
      overflow: 'hidden',
    },
  }
  return (
    <Box sx={style.backGround}>
      <SvgPattern />
    </Box>
  )
}
