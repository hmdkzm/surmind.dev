import Box from '@mui/material/Box'
import LinkWrapper from './LinkWrapper'
import Button from '@mui/material/Button'

export default function ViewMore({ link }: { link: string }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
      <LinkWrapper link={link} underline="none">
        <Button variant="outlined">View More</Button>
      </LinkWrapper>
    </Box>
  )
}
