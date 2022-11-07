import { memo } from 'react'
import { useCanvasEvents } from '~/hooks'
import { Page } from '../page'

interface CanvasProps {
  id?: string
}

const _Canvas = ({ id }: CanvasProps) => {
  const events = useCanvasEvents()

  console.log(events, 'inputs?')

  return (
    <div id={id} className="air-container">
      <div
        id="canvas"
        className="air-canvas"
        onPointerDown={(e) => {
          console.log(e)
        }}
      >
        <div>
          <Page></Page>
        </div>
      </div>
    </div>
  )
}

export const Canvas = memo(_Canvas)
