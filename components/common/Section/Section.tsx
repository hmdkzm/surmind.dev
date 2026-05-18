import { styleType } from '@/utils/types'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export default function Section({
  children,
  title,
  description,
  sx = {},
  ...props
}: {
  children?: React.ReactNode
  title?: string
  description?: string
  sx?: SxProps
  [props: string]: unknown
}) {
  const styles: styleType = {
    section: {
      textAlign: 'center',
      marginTop: '4rem',
      marginBottom: '4rem',
      ...sx,
    },
    description: {
      marginBottom: '2rem',
    },
  }
  return (
    <Box sx={styles.section} {...props} component={'section'}>
      {title && <Typography variant="h2">{title}</Typography>}
      {description && (
        <Typography sx={styles.description}>{description}</Typography>
      )}
      {children}
    </Box>
  )
}
