import { TrashIcon } from '@radix-ui/react-icons'
import { ToolButton } from '../tool-button'
import { Tooltip } from '../tooltip'

export const DeleteButton = () => {
  return (
    <Tooltip label="Delete" kbd="⌫" id="Air-Delete">
      <ToolButton variant="circle">
        <TrashIcon></TrashIcon>
      </ToolButton>
    </Tooltip>
  )
}
