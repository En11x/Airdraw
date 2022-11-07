import { memo, useState } from 'react'
import { AirdrawContext, AirdrawContextType } from '~/hooks/useAirdrawContext'
import { Inputs } from '~/utils/input'
import { useAirTheme } from '../../hooks'
import { AirShape, AirTheme } from '../../types'
import { Canvas } from '../canvas'

interface RendererProps<T extends AirShape, M = any> {
  id?: string
  theme?: Partial<AirTheme>
}

function _Renderer<T extends AirShape, M extends Record<string, unknown>>({
  id = 'airdraw',
  theme,
}: RendererProps<T, M>) {
  useAirTheme(theme, '#' + id)

  const [context, setContext] = useState<AirdrawContextType<T>>(() => ({
    inputs: new Inputs(),
  }))

  return (
    <AirdrawContext.Provider value={context}>
      <Canvas id={id} />
    </AirdrawContext.Provider>
  )
}

export const Renderer = memo(_Renderer)
