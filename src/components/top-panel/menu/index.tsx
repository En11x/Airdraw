import React, { useState } from 'react'
import { Root } from '@radix-ui/react-dropdown-menu'
import { DMTriggerIcon } from '../../primitives/dropdown-menu/DMTriggerIcon'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { DMContent } from '../../primitives/dropdown-menu/DMContent'

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
        id="air-menu"
        side="bottom"
        sideOffset={4}
        alignOffset={4}
        align="start"
      >
        content
      </DMContent>
    </Root>
  )
})
