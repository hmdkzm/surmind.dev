export const LineFrameTop = ({
  color = 'white',
  width,
  height,
}: {
  color?: string
  width?: string
  height?: string
}) => {
  return (
    <svg
      width={width || '100%'}
      height={height || '100%'}
      viewBox="0 0 1000 50"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
    >
      <path d="M 900,18 H 200" id="path3" />
      <circle id="path4" cx="982" cy="18" r="10" />
      <path d="m 982,28 0,22" id="path5" />
    </svg>
  )
}
