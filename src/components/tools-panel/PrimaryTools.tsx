import { CursorArrowIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { memo } from 'react'
import { useAirdrawApp } from '~/hooks'
import { styled } from '~/styles'
import { AIRSnapshot } from '~/types'
import { Panel } from '../panel'
import { ToolButtonWithTooltip } from '../tool-button'

const dockPositionSelector = (a: AIRSnapshot) => a.settings.dockPosition

export const PrimaryTools = memo(function PrimaryTools() {
  const app = useAirdrawApp()

  const dockPosition = app.useStore(dockPositionSelector)

  return (
    <StyledPanel
      side="center"
      style={{
        flexDirection:
          dockPosition === 'bottom' || dockPosition === 'top'
            ? 'row'
            : 'column',
      }}
    >
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
