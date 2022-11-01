import { CheckboxItem } from '@radix-ui/react-dropdown-menu'
import { PropsWithChildren } from 'react'
import { RowButton } from '../row-button'

interface DMCheckboxItemProps {
  id?: string
  checked: boolean
  kbd?: string
  onCheckedChange: (isChecked: boolean | string) => void
}

export const DMCheckboxItem = ({
  id,
  checked,
  kbd,
  onCheckedChange,
  children,
}: PropsWithChildren<DMCheckboxItemProps>) => {
  return (
    <CheckboxItem
      id={id}
      asChild
      checked={checked}
      dir="ltr"
      onCheckedChange={onCheckedChange}
    >
      <RowButton kbd={kbd} hasIndicator>
        {children}
      </RowButton>
    </CheckboxItem>
  )
}
