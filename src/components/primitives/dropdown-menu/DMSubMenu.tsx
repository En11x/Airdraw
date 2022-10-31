import {
  Arrow,
  Sub,
  SubContent,
  SubTrigger,
} from '@radix-ui/react-dropdown-menu'
import { PropsWithChildren } from 'react'
import { MenuContent } from '../menu-content'
import { RowButton } from '../row-button'

interface DMSubMenuProps {
  id?: string
  label: string
  size?: 'small'
  overflow?: boolean
}

export const DMSubMenu = ({
  id,
  label,
  size,
  overflow = false,
  children,
}: PropsWithChildren<DMSubMenuProps>) => {
  return (
    <Sub key={id}>
      <SubTrigger dir="ltr" asChild>
        <RowButton hasArrow>{label}</RowButton>
      </SubTrigger>
      <SubContent asChild sideOffset={4} alignOffset={-4}>
        <MenuContent size={size} overflow={overflow}>
          {children}
          <Arrow offset={13} />
        </MenuContent>
      </SubContent>
    </Sub>
  )
}
