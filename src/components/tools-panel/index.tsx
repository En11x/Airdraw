import { FocusEventHandler, memo } from 'react'
import { styled } from '~/styles'
import { ActionButton } from './ActionButton'
import { PrimaryTools } from './PrimaryTools'

export interface ToolsPanelProps {
  onBlur?: FocusEventHandler
}

export const ToolsPanel = memo(_ToolsPanel)

function _ToolsPanel({ onBlur }: ToolsPanelProps) {
  return (
    <>
      <StyledToolsPanelContainer onBlur={onBlur} side={'bottom'}>
        <StyledCenterWrap id="Air-Tools">
          <StyledPrimaryTools>
            <ActionButton />
            <PrimaryTools />
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
  variants: {
    side: {
      bottom: {
        width: '100%',
        left: 0,
        right: 0,
        bottom: 4,
      },
    },
  },
})

const StyledCenterWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
