export const LineFrameBottom = ({
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
      <g id="layer1">
        <path d="M 1000,32 H 600" id="path3" />
        <circle id="path4" cx="18" cy="39" r="10" />
        <path id="path5" d="M 982,5.4168715e-7 981.99998,50" />
        <path id="path6" d="M 18.000002,0 V 28.999999" />
        <circle
          id="path9"
          cx="-32"
          cy="193.66681"
          r="5"
          transform="rotate(-90)"
        />
        <circle
          id="path9-3"
          cx="-32"
          cy="223.61688"
          r="5"
          transform="rotate(-90)"
        />
        <circle
          id="path9-1"
          cx="-32"
          cy="163.71683"
          r="5"
          transform="rotate(-90)"
        />
        <path d="M 293.75,32 H 93.25" id="path27" />
        <path d="M 147.25139,48 H 239.7486" id="path28" />
      </g>
    </svg>
  )
}
