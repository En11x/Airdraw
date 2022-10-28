import { useTheme } from '../../hooks'
import { Canvas } from '../canvas'

export const Renderer = () => {
  useTheme()

  return <Canvas />
}
