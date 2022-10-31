import { Item } from '@radix-ui/react-dropdown-menu'
import { PropsWithChildren } from 'react'
import { RowButton, RowButtonProps } from '../row-button'

interface DMItemProps extends RowButtonProps {
  onSelect?: (event: Event) => void
}

export const DMItem = ({
  id,
  onSelect,
  children,
  ...rest
}: PropsWithChildren<DMItemProps>) => {
  return (
    <Item id={id} dir="ltr" onSelect={onSelect} asChild>
      <RowButton {...rest}>{children}</RowButton>
    </Item>
  )
}
