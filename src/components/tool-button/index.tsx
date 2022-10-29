import React, { PropsWithChildren } from 'react'
import { styled } from '../../styles'
import { breakpoints } from '../../styles/breakpoints'

export interface ToolButtonProps {
  id?: string
  variant?: 'primary' | 'icon' | 'text' | 'circle'
  isActive?: boolean
}

export const ToolButton = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ToolButtonProps>
>(({ id, variant, isActive = false, children, ...rest }, ref) => {
  return (
    <StyledToolButton
      ref={ref}
      id={id}
      variant={variant}
      isActive={isActive}
      bp={breakpoints}
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
  borderRadius:'$2'
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
      icon: {},
      text: {},
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
  ],
})
