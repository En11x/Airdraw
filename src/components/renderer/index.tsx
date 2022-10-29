import React from 'react'
import { useAirTheme } from '../../hooks'
import { AirTheme } from '../../types'
import { Canvas } from '../canvas'

interface RendererProps<T extends {}, M = any> {
  id?: string
  theme?:Partial<AirTheme>
}

export const Renderer: React.FC<RendererProps<{}, Record<string, unknown>>> = ({
  id = 'airdraw',
  theme
}) => {
  useAirTheme(theme,'#'+id)

  return <Canvas id={id} />
}
