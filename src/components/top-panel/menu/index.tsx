import React from 'react'
import { Root } from '@radix-ui/react-dropdown-menu'
import { DMTriggerIcon } from '../../primitives/dropdown-menu/DMTriggerIcon'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { DMContent } from '../../primitives/dropdown-menu/DMContent'

interface MenuProps {
  readonly: boolean
}

export const Menu = React.memo(function ({ readonly }: MenuProps) {
  return (
    <Root dir="ltr">
      <DMTriggerIcon id="Air-MenuIcon">
        <HamburgerMenuIcon />
      </DMTriggerIcon>
      <DMContent>content</DMContent>
    </Root>
  )
})
