import { LineFrameBox } from '@/components/SvgBackground/LineFrameBox'
import { randomNumber } from '@/utils/helper'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import { SxProps } from '@mui/material/styles'

export default function ArtCard({
  image,
  alt,
}: {
  image: string
  alt: string
}) {
  const randRotation = randomNumber(-4, 4)
  const style: {
    wrapper: SxProps
    frameWrapper: SxProps
    cardWrapper: SxProps
  } = {
    wrapper: {
      position: 'relative',
      width: '100%',
      aspectRatio: '1/1',
    },
    frameWrapper: {
      transform: `rotate(${randRotation}deg)`,
      width: '100%',
      height: '100%',
    },
    cardWrapper: {
      transform: `rotate(${randRotation}deg)`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: -1,
    },
  }
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.frameWrapper}>
        <LineFrameBox />
      </Box>
      <Box sx={style.cardWrapper}>
        <Card sx={{ width: '85%', height: '85%', m: 0 }}>
          <CardActionArea sx={{ width: '100%', height: '100%' }}>
            <CardMedia
              sx={{ width: '100%', height: '100%' }}
              component="img"
              image={image}
              alt={alt}
            />
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  )
}
