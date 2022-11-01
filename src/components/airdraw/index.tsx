import { styled } from '../../styles'
import { ErrorBoundary } from 'react-error-boundary'
import { Renderer } from '../renderer'
import { ErrorFallback } from '../error-fallback'
import { TopPanel } from '../top-panel'
import { memo, useLayoutEffect, useRef, useState } from 'react'
import { AirdrawAppContext, ContainerContext } from '../../hooks'
import { useStylesheet } from '~/hooks/useStylesheet'
import { AirCallbacks, AirdrawApp } from '~/state'

interface AirdrawProps extends AirCallbacks {
  id?: string
  readonly?: boolean
  showMenu?: boolean
  showStyles?: boolean
}

export const Airdraw = memo(
  ({
    id,
    readonly = false,
    showMenu = true,
    showStyles = true,
    onMount,
  }: AirdrawProps) => {
    const [sId, setSId] = useState(id)
    const [app, setApp] = useState(() => {
      const app = new AirdrawApp(id)

      return app
    })

    return (
      <AirdrawAppContext.Provider value={app}>
        <Innerdraw
          key={sId || 'Airdraw'}
          id={sId}
          readonly={readonly}
          showMenu={showMenu}
          showStyles={showStyles}
        ></Innerdraw>
      </AirdrawAppContext.Provider>
    )
  }
)

interface InnerdrawProps {
  id?: string
  readonly: boolean
  showMenu: boolean
  showStyles: boolean
}

const Innerdraw = memo(function Innerdraw({
  id,
  readonly,
  showMenu,
  showStyles,
}: InnerdrawProps) {
  const airWrapper = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ele = airWrapper.current
    if (!ele) return
  }, [])

  return (
    <ContainerContext.Provider value={airWrapper}>
      <StyledLayout ref={airWrapper}>
        <OneOff />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Renderer id={id} />
        </ErrorBoundary>
        <StyledUI>
          <TopPanel
            readonly={readonly}
            showMenu={showMenu}
            showStyles={showStyles}
          />
        </StyledUI>
      </StyledLayout>
    </ContainerContext.Provider>
  )
})

const OneOff = memo(() => {
  useStylesheet()

  return null
})

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
  zIndex: 2,
})
