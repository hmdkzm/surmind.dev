export const LineSectionFrame = ({
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
      <defs id="defs1" />
      <g id="layer1">
        <ellipse
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          id="path4"
          cx="18"
          cy="388.88205"
          rx="10.124708"
          ry="10.117961"
        />
        <ellipse
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          id="path4-3"
          cx="983.99994"
          cy="63.362103"
          rx="10.124708"
          ry="10.117961"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 999.99999,381.78235 H 800.99993"
          id="path5"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 983.99996,400 V 73.480065"
          id="path6"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 18.000001,4.9456254e-7 V 378.76409"
          id="path26"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9"
          cx="-381.78235"
          cy="196.40898"
          r="5"
          transform="rotate(-90)"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9-3"
          cx="-381.78235"
          cy="226.35905"
          r="5"
          transform="rotate(-90)"
        />
        <circle
          style={{ fill: color, stroke: color, strokeWidth: '2' }}
          id="path9-1"
          cx="-381.78235"
          cy="166.459"
          r="5"
          transform="rotate(-90)"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 296.49218,381.78235 H 95.992175"
          id="path27"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="m 149.99357,397.78235 h 92.49721"
          id="path28"
        />
        <path
          style={{ fill: 'none', stroke: color, strokeWidth: '2' }}
          d="M 900.00003,18.000001 H 200.00001"
          id="path21"
        />
      </g>
    </svg>
  )
}
