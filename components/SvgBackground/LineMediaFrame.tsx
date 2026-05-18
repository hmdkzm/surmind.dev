export const LineMediaFrame = ({
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
          cx="72"
          cy="553.88202"
          rx="10.124708"
          ry="10.117961"
        />
        <ellipse
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          id="path4-3"
          cx="928"
          cy="179.88205"
          rx="10.124708"
          ry="10.117961"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 964,518 H 499.99996"
          id="path5"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 928.00003,564.00002 V 190.00001"
          id="path6"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 892,582 V 300"
          id="path7"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '6' }}
          d="M 735.99999,99.5 V 228.1221"
          id="path11"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '6' }}
          d="m 264,118 v 76.98562"
          id="path11-2"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '6' }}
          d="M 735.99999,371.87792 V 500.5"
          id="path11-6"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 72,35.999996 V 543.76406"
          id="path26"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9"
          cx="228"
          cy="400.41681"
          r="5"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9-3"
          cx="228"
          cy="430.36688"
          r="5"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9-1"
          cx="228"
          cy="370.46683"
          r="5"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 228,500.5 V 300"
          id="path27"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 212,354.00139 V 446.4986"
          id="path28"
        />
      </g>
    </svg>
  )
}
