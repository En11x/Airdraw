import {
  Arrow,
  Content,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip'
import { PropsWithChildren } from 'react'
import { styled } from '~/styles'
import { Kbd } from '../primitives/kbd'

interface TooltipProps {
  label: string
  id?: string
  kbd?: string
}

export const Tooltip = ({
  label,
  id,
  kbd,
  children,
}: PropsWithChildren<TooltipProps>) => {
  return (
    <span id={id}>
      <Provider>
        <Root>
          <Trigger dir="ltr" asChild>
            <span>{children}</span>
          </Trigger>
          <StyledContent dir="ltr" sideOffset={8}>
            {label}
            {kbd ? <Kbd variant="tooltip">{kbd}</Kbd> : null}
            <StyledArrow />
          </StyledContent>
        </Root>
      </Provider>
    </span>
  )
}

const StyledContent = styled(Content, {
  borderRadius: 3,
  padding: '$3 $3 $3 $3',
  fontSize: '$1',
  backgroundColor: '$tooltip',
  color: '$tooltipContrast',
  boxShadow: '$3',
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$ui',
  userSelect: 'none',
})

const StyledArrow = styled(Arrow, {
  fill: '$tooltip',
  margin: '0 8px',
})
