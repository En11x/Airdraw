import React, { PropsWithChildren } from 'react'
import { styled } from '../../styles'

export interface ToolButtonProps {
  id?: string
}

export const ToolButton: React.FC<PropsWithChildren<ToolButtonProps>> = ({
  id,
  children,
}) => {
  return <StyledToolButton id={id}>{children}</StyledToolButton>
}

export const StyledToolButton = styled('button', {
  position: 'relative',
  color: '$text',
})
