import { styled } from '../../styles'
import { Panel } from '../panel'
import { Menu } from './menu'

interface TopPanelProps {
  readonly: boolean
  showMenu: boolean
}

export const TopPanel = ({ readonly, showMenu }: TopPanelProps) => {
  return (
    <StyledTopPanel>
      {showMenu && (
        <Panel>
          <Menu readonly={readonly} />
        </Panel>
      )}
    </StyledTopPanel>
  )
}

const StyledTopPanel = styled('div', {
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
})
