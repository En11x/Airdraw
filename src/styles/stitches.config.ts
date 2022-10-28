import { createStitches, defaultThemeMap } from '@stitches/react'

const { createTheme, styled } = createStitches({
  themeMap: {
    ...defaultThemeMap,
  },
  theme: {
    colors: {
      canvas: 'rgb(248, 249, 250)',
    },
  },
})

export const dark = createTheme({
  colors: {
    canvas: '#212529',
  },
})

export { styled }
