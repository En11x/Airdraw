interface CanvasProps {
  id?: string
}

export const Canvas = ({ id }: CanvasProps) => {
  return (
    <div id={id} className="air-container">
      <div id="canvas" className="air-canvas"></div>
    </div>
  )
}
