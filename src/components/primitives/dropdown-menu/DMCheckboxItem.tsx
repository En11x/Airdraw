import { CheckboxItem } from '@radix-ui/react-dropdown-menu'
import { PropsWithChildren } from 'react'
import { RowButton } from '../row-button'

interface DMCheckboxItemProps {
  id?: string
  checked: boolean
  kbd?: string
}

export const DMCheckboxItem = ({
  id,
  checked,
  kbd,
  children,
}: PropsWithChildren<DMCheckboxItemProps>) => {
  return (
    <CheckboxItem id={id} asChild checked={checked} dir="ltr">
      <RowButton kbd={kbd} hasIndicator>
        {children}
      </RowButton>
    </CheckboxItem>
  )
}
