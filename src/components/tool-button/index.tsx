import React, { PropsWithChildren } from 'react'
import { styled } from '../../styles'

export interface ToolButtonProps {
  id?: string
}

export const ToolButton: React.FC<PropsWithChildren<ToolButtonProps>> = ({
  id,
  children,
}) => {
  return (
    <StyledToolButton id={id}>
      <StyledToolButtonInner> {children}</StyledToolButtonInner>
    </StyledToolButton>
  )
}

export const StyledToolButton = styled('button', {
  position: 'relative',
  color: '$text',
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
})

export const StyledToolButtonInner = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing:'border-box'
})
