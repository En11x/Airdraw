import { styled } from '../../../styles'

export const MenuContent = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  backgroundColor:'$panel',
  minWidth:180,
  maxHeight:'100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  padding:'$2',
  borderRadius:'$3',
  border: '1px solid $panelContrast',
  boxShadow: '$panel',
})
