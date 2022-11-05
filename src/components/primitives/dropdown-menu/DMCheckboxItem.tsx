import { CheckboxItem } from '@radix-ui/react-dropdown-menu'
import { PropsWithChildren } from 'react'
import { preventEvent } from '~/events'
import { RowButton, RowButtonProps } from '../row-button'

interface DMCheckboxItemProps {
  id?: string
  checked: boolean
  kbd?: string
  onCheckedChange: (isChecked: boolean) => void
  variant?: RowButtonProps['variant']
}

export const DMCheckboxItem = ({
  id,
  checked,
  kbd,
  onCheckedChange,
  variant,
  children,
}: PropsWithChildren<DMCheckboxItemProps>) => {
  return (
    <CheckboxItem
      id={id}
      asChild
      checked={checked}
      onSelect={preventEvent}
      dir="ltr"
      onCheckedChange={onCheckedChange as any}
    >
      <RowButton kbd={kbd} hasIndicator variant={variant}>
        {children}
      </RowButton>
    </CheckboxItem>
  )
}
