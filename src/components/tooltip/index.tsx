interface TooltipProps {
  label: string
  id?: string
}

export const Tooltip = ({ label, id }: TooltipProps) => {
  return <span id={id}></span>
}
