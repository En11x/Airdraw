import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DMTriggerIcon } from '../../primitives/dropdown-menu/DMTriggerIcon'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

interface MenuProps {
  readonly: boolean
}

export const Menu = React.memo(function ({ readonly }: MenuProps) {
  return (
    <DropdownMenu.Root dir="ltr">
      <DMTriggerIcon id="Air-MenuIcon">
        <HamburgerMenuIcon />
      </DMTriggerIcon>
    </DropdownMenu.Root>
  )
})
