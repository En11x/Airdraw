import { styled } from '../../styles'
import { ErrorBoundary } from 'react-error-boundary'
import { Renderer } from '../renderer'
import { ErrorFallback } from '../errorFallback'

export const Airdraw = () => {
  return (
    <StyledLayout>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Renderer />
      </ErrorBoundary>
    </StyledLayout>
  )
}

const StyledLayout = styled('div', {
  position: 'absolute',
  height: '100%',
  width: '100%',
  minHeight: 0,
  minWidth: 0,
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
  outline: 'none',
})
