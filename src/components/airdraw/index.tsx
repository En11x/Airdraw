import { styled } from '../../styles'
import { ErrorBoundary } from 'react-error-boundary'
import { Renderer } from '../renderer'
import { ErrorFallback } from '../error-fallback'
import { TopPanel } from '../top-panel'

interface AirdrawProps {
  id?: string
  readonly?: boolean
  showMenu?: boolean
}

export const Airdraw = ({
  id,
  readonly = false,
  showMenu = true,
}: AirdrawProps) => {
  return (
    <StyledLayout>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Renderer id={id} />
      </ErrorBoundary>
      <StyledUI>
        <TopPanel readonly={readonly} showMenu={showMenu} />
      </StyledUI>
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

const StyledUI = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  padding: '8px 8px 0 8px',
})
