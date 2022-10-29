import { styled } from '../../styles'
import { Panel } from '../panel'
import { Menu } from './menu'

interface TopPanelProps {
  readonly: boolean
  showMenu: boolean
  showStyles: boolean
}

export const TopPanel = ({ readonly, showMenu, showStyles }: TopPanelProps) => {
  return (
    <StyledTopPanel>
      {showMenu && (
        <Panel side="left">
          <Menu readonly={readonly} />
        </Panel>
      )}
      <StyledSpacer />
      {showStyles && <Panel>右边菜单</Panel>}
    </StyledTopPanel>
  )
}

const StyledTopPanel = styled('div', {
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'row',
  pointerEvents: 'none',
  '& > *': {
    pointerEvents: 'all',
  },
})

const StyledSpacer = styled('div', {
  flexGrow: 2,
  pointerEvents: 'none',
})
