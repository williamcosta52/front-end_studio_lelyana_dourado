export default function Line() {
  return (
    <svg
      width='100%'
      height='50'
      viewBox='0 0 338 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_6_6)'>
        <path
          d='M4.11171 4.50891L7.00735 7.38674L9.88518 4.49109L6.98953 1.61326L4.11171 4.50891ZM333.885 3.49109L330.99 0.613262L328.112 3.50891L331.007 6.38674L333.885 3.49109ZM6.99999 5L331 4L330.997 3L6.9969 4L6.99999 5Z'
          fill='#009BDE'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_6_6'
          x='0.111694'
          y='0.613281'
          width='337.773'
          height='14.7734'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_6_6'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_6_6'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
}
