export const LineFrameSide = ({
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
      viewBox="0 0 1000 400"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="section-mid"
        width="1000"
        height="50"
        patternUnits="userSpaceOnUse"
        viewBox={`0 0 1000 50`}
        offset="50"
      >
        <g id="layer1">
          <path
            style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
            d="M 982,0 V 50"
            id="path5"
          />
          <path
            style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
            d="M 18,0 V 50"
            id="path6"
          />
        </g>
      </pattern>
      <pattern
        id="section-top"
        width="1000"
        height="50"
        patternUnits="userSpaceOnUse"
        viewBox={`0 0 1000 50`}
      >
        <path
          d="M 900,18 H 200"
          id="path3"
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
        />
        <circle
          id="path4"
          cx="982"
          cy="18"
          r="10"
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
        />
        <path
          d="M 982,28 V 50"
          id="path5"
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
        />
      </pattern>
      <rect width="100%" height="50" fill="url(#section-top)" />
      <rect
        style={{ transform: 'translateY(49.8px)' }}
        width="100%"
        height="100%"
        fill="url(#section-mid)"
      />
    </svg>
  )
}
