import { ItemIndicator } from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { forwardRef, PropsWithChildren } from 'react'
import { styled } from '~/styles'
import { Kbd } from '../kbd'
import { SmallIcon } from '../small-icon'

export interface RowButtonProps {
  id?: string
  hasArrow?: boolean
  hasIndicator?: boolean
  kbd?: string
}

export const RowButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<RowButtonProps>
>(
  (
    { id, hasArrow = false, hasIndicator = false, kbd, children, ...rest },
    ref
  ) => {
    return (
      <StyledRowButton id={id} ref={ref} {...rest}>
        <StyledRowButtonInner>
          {children}
          {kbd ? <Kbd variant="menu">{kbd}</Kbd> : undefined}
          {hasIndicator && (
            <ItemIndicator dir="ltr">
              <SmallIcon>
                <CheckIcon />
              </SmallIcon>
            </ItemIndicator>
          )}
          {hasArrow && (
            <SmallIcon>
              <ChevronRightIcon />
            </SmallIcon>
          )}
        </StyledRowButtonInner>
      </StyledRowButton>
    )
  }
)

const StyledRowButtonInner = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$panel',
  borderRadius: '$2',
  border: '1px solid transparent',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 $3',

  [`& > ${SmallIcon}`]: {
    paddingLeft: '$3',
  },
})

const StyledRowButton = styled('button', {
  position: 'relative',
  width: '100%',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  height: 32,
  minHeight: 32,
  outline: 'none',
  color: '$text',
  fontFamily: '$ui',
  fontWeight: 400,
  fontSize: '$1',
  borderRadius: 4,
  margin: 0,
  padding: 0,
  userSelect: 'none',

  [`&:focus:not(:disabled) ${StyledRowButtonInner}`]: {
    backgroundColor: '$hover',
  },
})
