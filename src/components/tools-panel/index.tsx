import { FocusEventHandler, memo } from 'react'
import { useAirdrawApp } from '~/hooks'
import { styled } from '~/styles'
import { AIRSnapshot } from '~/types'
import { ActionButton } from './ActionButton'
import { DeleteButton } from './DeleteButton'
import { PrimaryTools } from './PrimaryTools'

export interface ToolsPanelProps {
  onBlur?: FocusEventHandler
}

export const ToolsPanel = memo(_ToolsPanel)

const dockPositionSelector = (a: AIRSnapshot) => a.settings.dockPosition

function _ToolsPanel({ onBlur }: ToolsPanelProps) {
  const app = useAirdrawApp()
  const side = app.useStore(dockPositionSelector)

  return (
    <>
      <StyledToolsPanelContainer onBlur={onBlur} side={side}>
        <StyledCenterWrap id="Air-Tools">
          <StyledPrimaryTools
            orientation={
              side === 'left' || side === 'right' ? 'vertical' : 'horizontal'
            }
          >
            <ActionButton />
            <PrimaryTools />
            <DeleteButton />
          </StyledPrimaryTools>
        </StyledCenterWrap>
      </StyledToolsPanelContainer>
    </>
  )
}

const StyledToolsPanelContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
  height: 64,
  gap: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 200,
  overflow: 'hidden',
  pointerEvents: 'none',
  variants: {
    bp: {
      mobile: {},
      small: {},
      medium: {},
      large: {},
    },
    side: {
      bottom: {
        width: '100%',
        left: 0,
        right: 0,
        bottom: 4,
      },
      left: {
        width: 64,
        height: '100%',
        left: 0,
      },
      right: {
        width: 64,
        height: '100%',
        top: 0,
        right: 0,
      },
      top: {
        width: '100%',
        height: 64,
        left: 0,
        right: 0,
        top: 45,
      },
    },
  },
  compoundVariants: [
    {
      side: 'top',
      bp: 'large',
      css: {
        top: 0,
      },
    },
    {
      side: 'bottom',
      css: {
        bottom: 44,
      },
    },
  ],
})

const StyledCenterWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  height: 'fit-content',
  gap: '$4',
})

const StyledPrimaryTools = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  gap: '$3',
  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
})
