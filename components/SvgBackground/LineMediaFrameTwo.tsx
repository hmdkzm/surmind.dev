export const LineMediaFrameTwo = ({
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
      viewBox="0 0 1000 600"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs1" />
      <g id="layer1">
        <ellipse
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          id="path4"
          cx="18"
          cy="553.88202"
          rx="10.124708"
          ry="10.117961"
        />
        <ellipse
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          id="path4-3"
          cx="984"
          cy="179.88203"
          rx="10.124708"
          ry="10.117961"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          d="M 1000,564 H 800.99993"
          id="path5"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          d="m 983.99996,581.99998 v -392"
          id="path6"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          d="M 947.99997,600.00002 V 299.99999"
          id="path7"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '6' }}
          d="M 815.99999,59.5 V 188.1221"
          id="path11"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '6' }}
          d="m 184,78 v 76.98562"
          id="path11-2"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '6' }}
          d="M 815.99999,411.87792 V 540.5"
          id="path11-6"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          d="M 18,36 V 543.76406"
          id="path26"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9"
          cx="128"
          cy="400.41681"
          r="5"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9-3"
          cx="128"
          cy="430.36688"
          r="5"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9-1"
          cx="128"
          cy="370.46683"
          r="5"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          d="M 128,500.5 V 300"
          id="path27"
        />
        <path
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          d="M 112,354.00139 V 446.4986"
          id="path28"
        />
      </g>
    </svg>
  )
}
