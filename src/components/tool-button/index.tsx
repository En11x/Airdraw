import React, { PropsWithChildren } from 'react'
import { styled } from '../../styles'
import { breakpoints } from '../../styles/breakpoints'

export interface ToolButtonProps {
  id?: string
  variant?: 'primary' | 'icon' | 'text' | 'circle'
  isActive?: boolean
  onClick?: () => void
}

export const ToolButton = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ToolButtonProps>
>(({ id, variant, isActive = false, onClick, children, ...rest }, ref) => {
  return (
    <StyledToolButton
      ref={ref}
      id={id}
      variant={variant}
      isActive={isActive}
      bp={breakpoints}
      onClick={onClick}
      {...rest}
    >
      <StyledToolButtonInner> {children}</StyledToolButtonInner>
    </StyledToolButton>
  )
})

export const StyledToolButtonInner = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  borderRadius: '$2',
  margin: 0,
  border: '1px solid transparent',
  fontFamily: '$ui',
  color: 'inherit',
  userSelect: 'none',
})

export const StyledToolButton = styled('button', {
  position: 'relative',
  color: '$text',
  fontSize: '$0',
  background: 'none',
  margin: 0,
  border: '1px solid $panel',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$2',
  pointerEvents: 'all',
  variants: {
    variant: {
      primary: {
        marginTop: '0',
      },
      icon: {
        [`& ${StyledToolButtonInner}`]: {
          display: 'grid',
          '& > *': {
            gridRow: 1,
            gridColumn: 1,
          },
        },
      },
      text: {
        width: 'auto',
        [`& ${StyledToolButtonInner}`]: {
          fontSize: '$1',
          padding: '0 $3',
          gap: '$3',
        },
      },
      circle: {},
    },
    isActive: {
      true: {},
      false: {},
    },
    bp: {
      mobile: {
        padding: 0,
      },
      small: {},
    },
  },
  compoundVariants: [
    {
      isActive: false,
      bp: 'small',
      css: {
        [`&:hover:not(:disabled) ${StyledToolButtonInner}`]: {
          backgroundColor: '$hover',
        },
        [`&:focus:not(:disabled) ${StyledToolButtonInner}`]: {
          backgroundColor: '$hover',
        },
      },
    },
    {
      isActive: true,
      css: {
        [`${StyledToolButtonInner}`]: {
          backgroundColor: '$selected',
          color: '$selectedContrast',
        },
      },
    },
  ],
})
