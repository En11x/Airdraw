import React from 'react'
import { useTheme } from '../../hooks'
import { Canvas } from '../canvas'

interface RendererProps<T extends {}, M = any> {
  id?: string
}

export const Renderer: React.FC<RendererProps<{}, Record<string, unknown>>> = ({
  id,
}) => {
  useTheme()

  return <Canvas id={id} />
}
