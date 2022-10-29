import { styled } from '../../styles'

export const Panel = styled('div', {
  backgroundColor: '$panel',
  display: 'flex',
  flexDirection: 'row',
  padding: '$2',
  overflow: 'hidden',
  boxShadow: '$panel',
  border: '1px solid $panelContrast',
  variants: {
    side: {
      left: {
        padding: 0,
        borderTop: 0,
        borderLeft: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 0,
      },
    },
  },
})
