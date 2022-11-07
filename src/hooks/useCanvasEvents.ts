import { PointerEvent, useMemo } from 'react'
import { useAirdrawContext } from './useAirdrawContext'

export const useCanvasEvents = () => {
  const { inputs } = useAirdrawContext()
  return useMemo(() => {
    return {
      onPointerDown: (e: PointerEvent) => {
        console.log(e)
      },
    }
  }, [])
}
