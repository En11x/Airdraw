import { createStitches, defaultThemeMap } from '@stitches/react'

const { createTheme, styled } = createStitches({
  themeMap: {
    ...defaultThemeMap,
  },
  theme: {
    colors: {
      panel: '#fefefe',
      canvas: 'rgb(248, 249, 250)',
      text: '#33333',
      panelContrast: '#ffffff',
      hover: '#ececec',
    },
    shadows: {
      2: '0px 1px 1px rgba(0, 0, 0, 0.14)',
      3: '0px 2px 3px rgba(0, 0, 0, 0.14)',
      4: '0px 4px 5px -1px rgba(0, 0, 0, 0.14)',
      8: '0px 12px 17px rgba(0, 0, 0, 0.14)',
      12: '0px 12px 17px rgba(0, 0, 0, 0.14)',
      24: '0px 24px 38px rgba(0, 0, 0, 0.14)',
      key: '1px 1px rgba(0,0,0,1)',
      panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05),
        0px 0px 16px -8px rgba(0, 0, 0, 0.05),
        0px 0px 16px -12px rgba(0, 0, 0, 0.12),
        0px 0px 2px 0px rgba(0, 0, 0, 0.08)`,
    },
    space: {
      0: '2px',
      1: '3px',
      2: '4px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '32px',
      7: '48px',
    },
    fontSizes: {
      0: '10px',
      1: '12px',
      2: '13px',
      3: '16px',
      4: '18px',
    },
    fonts: {
      ui: '"Recursive", system-ui, sans-serif',
      body: '"Recursive", system-ui, sans-serif',
      mono: '"Recursive Mono", monospace',
    },
    radii: {
      0: '2px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
    },
  },
  media: {
    micro: '(max-width:370px)',
    sm: '(min-width:640px)',
    md: '(min-width:768px)',
    lg: '(min-width:1024px)',
  },
})

export const dark = createTheme({
  colors: {
    bounds: 'rgba(38, 150, 255, 1.000)',
    boundsBg: 'rgba(38, 150, 255, 0.05)',
    hover: '#444A50',
    overlay: 'rgba(0, 0, 0, 0.15)',
    overlayContrast: 'rgba(255, 255, 255, 0.15)',
    panel: '#363D44',
    panelContrast: '#49555f',
    selected: 'rgba(38, 150, 255, 1.000)',
    selectedContrast: '#fefefe',
    text: '#f8f9fa',
    tooltip: '#1d1d1d',
    tooltipContrast: '#ffffff',
    canvas: '#212529',
  },
  shadows: {
    2: '0px 1px 1px rgba(0, 0, 0, 0.24)',
    3: '0px 2px 3px rgba(0, 0, 0, 0.24)',
    4: '0px 4px 5px -1px rgba(0, 0, 0, 0.24)',
    8: '0px 12px 17px rgba(0, 0, 0, 0.24)',
    12: '0px 12px 17px rgba(0, 0, 0, 0.24)',
    24: '0px 24px 38px rgba(0, 0, 0, 0.24)',
    panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05),
      0px 0px 16px -8px rgba(0, 0, 0, 0.09),
      0px 0px 16px -12px rgba(0, 0, 0, 0.2)`,
  },
})

export { styled }
