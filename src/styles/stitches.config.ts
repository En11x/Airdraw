import { createStitches, defaultThemeMap } from '@stitches/react'

const { createTheme, styled } = createStitches({
  themeMap: {
    ...defaultThemeMap,
  },
  theme: {
    colors: {
      panel:'#fefefe',
      canvas: 'rgb(248, 249, 250)',
    },
  },
})

export const dark = createTheme({
  colors: {
    panel: '#363D44',
    canvas: '#212529',
  },
})

export { styled }
