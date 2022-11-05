import { Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { DMContent } from '../primitives/dropdown-menu/DMContent'
import { ToolButton } from '../tool-button'

export const ActionButton = () => {
  return (
    <Root dir="ltr">
      <Trigger dir="ltr" asChild>
        <ToolButton variant="circle">
          <DotsHorizontalIcon />
        </ToolButton>
      </Trigger>
      <DMContent side="top" sideOffset={16}>
        TODO
      </DMContent>
    </Root>
  )
}
