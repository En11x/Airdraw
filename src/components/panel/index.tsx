import { styled } from '~/styles'

export const Panel = styled('div', {
  backgroundColor: '$panel',
  display: 'flex',
  flexDirection: 'row',
  padding: '$2',
  overflow: 'hidden',
  boxShadow: '$panel',
  border: '1px solid $panelContrast',
  gap: 0,
  variants: {
    side: {
      center: {
        borderRadius: 9,
      },
      left: {
        padding: 0,
        borderTop: 0,
        borderLeft: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 0,
      },
      right: {
        padding: 0,
        borderTop: 0,
        borderRight: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 0,
      },
    },
  },
})
