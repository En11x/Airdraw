import { CursorArrowIcon } from '@radix-ui/react-icons'
import { memo } from 'react'
import { styled } from '~/styles'
import { Panel } from '../panel'

export const PrimaryTools = memo(function PrimaryTools() {
  return (
    <StyledPanel side="center">
      <CursorArrowIcon />
    </StyledPanel>
  )
})

const StyledPanel = styled(Panel, {
  variants: {
    bp: {
      mobile: {
        padding: '$0',
        borderRadius: '10px',
      },
      small: {
        padding: '$2',
      },
    },
  },
})
