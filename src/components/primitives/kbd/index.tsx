import { PropsWithChildren } from 'react'
import { styled } from '~/styles'
import { Utils } from '~/utils'

const commandKey = () => (Utils.isDarwin() ? '⌘' : 'Ctrl')

export const Kbd = ({
  variant,
  children,
}: PropsWithChildren<{ variant: 'menu' | 'tooltip' }>) => {
  return (
    <StyledKbd variant={variant}>
      {children
        ?.toString()
        .split('')
        .map((k, i) => {
          return <span key={i}>{k.replace('#', commandKey())}</span>
        })}
    </StyledKbd>
  )
}

const StyledKbd = styled('kbd', {
  marginLeft: '$3',
  textShadow: '$2',
  textAlign: 'center',
  fontSize: '$0',
  fontFamily: '$ui',
  color: '$text',
  background: 'none',
  fontWeight: 400,
  gap: '$1',
  display: 'flex',
  alignItems: 'center',

  '& > span': {
    padding: '$0',
    borderRadius: '$0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  variants: {
    variant: {
      menu: {},
      tooltip: {
        '& > span': {
          color: '$tooltipContrast',
          background: '$overlayContrast',
          boxShadow: '$key',
          width: '20px',
          height: '20px',
        },
      },
    },
  },
})
