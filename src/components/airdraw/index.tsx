import { memo, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useStylesheet } from '~/hooks/useStylesheet'
import { AirCallbacks, AirdrawApp } from '~/state'
import { AirdrawAppContext, ContainerContext, useAirdrawApp } from '../../hooks'
import { dark, styled } from '../../styles'
import { ContextMenu } from '../context-menu'
import { ErrorFallback } from '../error-fallback'
import { Renderer } from '../renderer'
import { ToolsPanel } from '../tools-panel'
import { TopPanel } from '../top-panel'

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
  const app = useAirdrawApp()
  const airWrapper = useRef<HTMLDivElement>(null)

  const state = app.useStore()
  const { settings } = state

  const theme = useMemo(() => {
    if (settings.isDarkMode) {
      return {
        background: '#212529',
      }
    }
    return {}
  }, [settings.isDarkMode])

  useLayoutEffect(() => {
    const ele = airWrapper.current
    if (!ele) return
    if (settings.isDarkMode) {
      ele.classList.add(dark)
    } else {
      ele.classList.remove(dark)
    }
  }, [settings.isDarkMode])

  return (
    <ContainerContext.Provider value={airWrapper}>
      <StyledLayout ref={airWrapper}>
        <OneOff />
        <ContextMenu>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Renderer id={id} theme={theme} />
          </ErrorBoundary>
        </ContextMenu>
        <StyledUI>
          <TopPanel
            readonly={readonly}
            showMenu={showMenu}
            showStyles={showStyles}
          />
          <StyledSpacer />
          <ToolsPanel />
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

  '& .air-container': {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
})

const StyledUI = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  padding: '8px 8px 0 8px',
  zIndex: 2,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  pointerEvents: 'none',
  '& > *': {
    pointerEvents: 'all',
  },
})

const StyledSpacer = styled('div', {
  flexGrow: 2,
})
