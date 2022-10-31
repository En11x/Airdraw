import { Portal, Content } from '@radix-ui/react-dropdown-menu'
import { FC, PropsWithChildren } from 'react'
import { useContainer } from '~/hooks'
import { styled } from '~/styles'
import { stopPropagation } from '~/events'
import { MenuContent } from '../menu-content'

interface DMContentProps {
  variant?: 'menu' | 'horizontal'
  overflow?: boolean
  id?: string
  align?: 'start' | 'center' | 'end'
  alignOffset?: number
  sideOffset?: number
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
}

export const DMContent: FC<PropsWithChildren<DMContentProps>> = ({
  variant,
  overflow = false,
  id,
  children,
  align,
  sideOffset = 4,
  alignOffset = 0,
  side = 'bottom',
}) => {
  const container = useContainer()

  console.log(container.current, align,alignOffset,sideOffset)

  return (
    <Portal dir="ltr" container={overflow ? undefined : container.current}>
      <Content
        asChild
        id={id}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        side={side}
        onEscapeKeyDown={stopPropagation}
      >
        <StyledContent variant={variant} overflow={overflow}>
          {children}
        </StyledContent>
      </Content>
    </Portal>
  )
}

const StyledContent = styled(MenuContent, {
  width: 'fit-content',
  height: 'fit-content',
  minWidth: 0,
  maxHeight: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',

  variants: {
    variant: {
      horizontal: {
        flexDirection: 'row',
      },
      menu: {
        minWidth: 128,
      },
    },
    overflow: {
      true: {
        maxHeight: '60vh',
      },
    },
  },
})
