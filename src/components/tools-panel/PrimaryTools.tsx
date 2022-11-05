import { CursorArrowIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { memo } from 'react'
import { styled } from '~/styles'
import { Panel } from '../panel'
import { ToolButtonWithTooltip } from '../tool-button'

export const PrimaryTools = memo(function PrimaryTools() {
  return (
    <StyledPanel side="center">
      <ToolButtonWithTooltip label="Select" kbd="1">
        <CursorArrowIcon />
      </ToolButtonWithTooltip>
      <ToolButtonWithTooltip label="Draw" kbd="2">
        <Pencil1Icon />
      </ToolButtonWithTooltip>
    </StyledPanel>
  )
})

const StyledPanel = styled(Panel, {
  variants: {
    bp: {
      mobile: {
        padding: '$0',
        borderRadius: '10px',
      },
      small: {
        padding: '$2',
      },
    },
  },
})
