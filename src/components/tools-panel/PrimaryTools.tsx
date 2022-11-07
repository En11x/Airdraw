import { CursorArrowIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { memo, useCallback } from 'react'
import { useAirdrawApp } from '~/hooks'
import { styled } from '~/styles'
import { AIRSnapshot, ShapeType } from '~/types'
import { Panel } from '../panel'
import { ToolButtonWithTooltip } from '../tool-button'

const dockPositionSelector = (a: AIRSnapshot) => a.settings.dockPosition
const activeToolSelector = (a: AIRSnapshot) => a.appState.activeTool

export const PrimaryTools = memo(function PrimaryTools() {
  const app = useAirdrawApp()
  const dockPosition = app.useStore(dockPositionSelector)
  const activeTool = app.useStore(activeToolSelector)

  const selectSelectTool = useCallback(() => {
    app.selectTool('select')
  }, [app])

  const selectDrawTool = useCallback(() => {
    app.selectTool(ShapeType.Draw)
  }, [app])

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
      <ToolButtonWithTooltip
        label="Select"
        kbd="1"
        isActive={activeTool === 'select'}
        onClick={selectSelectTool}
      >
        <CursorArrowIcon />
      </ToolButtonWithTooltip>
      <ToolButtonWithTooltip
        label="Draw"
        kbd="2"
        isActive={activeTool === 'draw'}
        onClick={selectDrawTool}
      >
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
