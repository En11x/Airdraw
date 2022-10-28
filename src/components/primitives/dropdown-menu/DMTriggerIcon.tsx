import React, { PropsWithChildren } from 'react'
import { Trigger } from '@radix-ui/react-dropdown-menu'
import { ToolButton, ToolButtonProps } from '../../tool-button'

interface DMTriggerIconProps extends ToolButtonProps {
  id?: string
}

export const DMTriggerIcon: React.FC<PropsWithChildren<DMTriggerIconProps>> = ({
  id,
  children,
  ...rest
}) => {
  return (
    <Trigger asChild id={id}>
      <ToolButton {...rest}>{children}</ToolButton>
    </Trigger>
  )
}
