import { styled } from '../../styles'
import { Panel } from '../panel'

interface TopPanelProps {
  readonly: boolean
  showMenu: boolean
}

export const TopPanel = ({ readonly, showMenu }: TopPanelProps) => {
  return <StyledTopPanel>{showMenu && <Panel>111</Panel>}</StyledTopPanel>
}

const StyledTopPanel = styled('div', {
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
})
