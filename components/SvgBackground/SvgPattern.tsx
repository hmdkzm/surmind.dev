import { grey } from '@mui/material/colors'

export const SvgPattern = ({
  width = '100%',
  height = '100%',
  dx = 80,
  dy = 56,
  patternWidth = dx * 1,
  patternHeight = dy * 1,
  strokeColor = grey[800],
  strokeWidth = 1,
  ...props
}: {
  width?: string
  height?: string
  dx?: number
  dy?: number
  patternWidth?: number
  patternHeight?: number
  strokeColor?: string
  strokeWidth?: number
  [key: string]: unknown
}) => {
  const points = ''
  return (
    <svg width={width} height={height} {...props}>
      <pattern
        id="a"
        x={0}
        y={0}
        width={patternWidth}
        height={patternHeight}
        patternUnits="userSpaceOnUse"
        viewBox={`0 0 ${dx} ${dy}`}
      >
        <path
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill={'none'}
          d={`M 0,0 ${points} ${dx},${dy}`}
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#a)" />
    </svg>
  )
}
