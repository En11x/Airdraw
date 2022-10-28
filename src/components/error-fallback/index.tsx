import { styled } from '../../styles'

export const ErrorFallback = () => {
  return <Container>Error</Container>
}

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '$canvas',
})
