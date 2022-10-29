import { Portal, Content } from '@radix-ui/react-dropdown-menu'
import { FC, PropsWithChildren } from 'react'
import { styled } from '../../../styles'
import { MenuContent } from '../menu-content'

interface DMContentProps {
  variant?: 'menu' | 'horizontal'
  overflow?: boolean
  id?: string
}

export const DMContent: FC<PropsWithChildren<DMContentProps>> = ({
  variant,
  overflow,
  id,
  children,
}) => {
  return (
    <Portal dir="ltr">
      <Content asChild id={id}>
        <StyledContent>{children}</StyledContent>
      </Content>
    </Portal>
  )
}

const StyledContent = styled(MenuContent, {
  width: 'fit-content',
  height: 'fit-content',
})
