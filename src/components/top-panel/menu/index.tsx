import React, { useState } from 'react'
import { Root } from '@radix-ui/react-dropdown-menu'
import { DMTriggerIcon } from '../../primitives/dropdown-menu/DMTriggerIcon'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { DMContent } from '../../primitives/dropdown-menu/DMContent'
import { DMSubMenu } from '~/components/primitives/dropdown-menu/DMSubMenu'
import { DMItem } from '~/components/primitives/dropdown-menu/DMItem'
import { Divider } from '~/components/primitives/divider'
import { PreferencesMenu } from '../preferences-menu'

interface MenuProps {
  readonly: boolean
}

export const Menu = React.memo(function ({ readonly }: MenuProps) {
  const [_, setForce] = useState(0)

  React.useEffect(() => setForce(1), [])

  return (
    <Root dir="ltr">
      <DMTriggerIcon id="Air-MenuIcon">
        <HamburgerMenuIcon />
      </DMTriggerIcon>
      <DMContent
        variant="menu"
        id="Air-Menu"
        side="bottom"
        sideOffset={4}
        alignOffset={4}
        align="start"
      >
        <DMSubMenu label="File..." id="Air-Menu-File">
          <DMItem id="Air-Menu-File-New-Project">New Project</DMItem>
        </DMSubMenu>
        <Divider />
        <PreferencesMenu />
      </DMContent>
    </Root>
  )
})
