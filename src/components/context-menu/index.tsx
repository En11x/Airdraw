import { Content, Portal, Root, Trigger } from '@radix-ui/react-context-menu'
import { FocusEventHandler, memo, PropsWithChildren } from 'react'
import { useContainer } from '~/hooks'

interface ContextMenuProps {
  onBlur?: FocusEventHandler
}

/// right click menu
function _ContextMenu({ children }: PropsWithChildren<ContextMenuProps>) {
  const container = useContainer()

  return (
    <Root dir="ltr">
      <Trigger dir="ltr">{children}</Trigger>
      <Portal container={container.current}>
        <Content>1</Content>
      </Portal>
    </Root>
  )
}

export const ContextMenu = memo(_ContextMenu)
