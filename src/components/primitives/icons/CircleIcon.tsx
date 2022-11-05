import { SVGProps } from 'react'

export const CircleIcon = (
  props: Pick<SVGProps<SVGElement>, 'strokeWidth' | 'stroke' | 'fill'> & {
    size: number
  }
) => {
  const { size = 16, ...rest } = props

  return (
    <svg width={24} height={24} {...rest}>
      <circle cx={12} cy={12} r={size / 2}></circle>
    </svg>
  )
}
