import { Item, RadioGroup, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import {
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons'
import { memo, useCallback, useEffect, useState } from 'react'
import { Divider } from '~/components/primitives/divider'
import { DMCheckboxItem } from '~/components/primitives/dropdown-menu/DMCheckboxItem'
import { DMContent } from '~/components/primitives/dropdown-menu/DMContent'
import { DMRadioItem } from '~/components/primitives/dropdown-menu/DMRadioItem'
import { CircleIcon } from '~/components/primitives/icons'
import { DashDashedIcon } from '~/components/primitives/icons/DashDashedIcon'
import { DashDottedIcon } from '~/components/primitives/icons/DashDottedIcon'
import { DashDrawIcon } from '~/components/primitives/icons/DashDrawIcon'
import { DashSolidIcon } from '~/components/primitives/icons/DashSolidIcon'
import { SizeLargeIcon } from '~/components/primitives/icons/SizeLargeIcon'
import { SizeMediumIcon } from '~/components/primitives/icons/SizeMediumIcon'
import { SizeSmallIcon } from '~/components/primitives/icons/SizeSmallIcon'
import { ToolButton } from '~/components/tool-button'
import { preventEvent } from '~/events'
import { useAirdrawApp } from '~/hooks'
import { fills, strokes } from '~/state/shared'
import { styled } from '~/styles'
import {
  AIRSnapshot,
  AlignStyle,
  ColorStyle,
  DashStyle,
  SizeStyle,
} from '~/types'

const themeSelector = (a: AIRSnapshot) =>
  a.settings.isDarkMode ? 'dark' : 'light'

const currentStyleSelector = (a: AIRSnapshot) => a.appState.currentStyle

const keepOpenSelector = (a: AIRSnapshot) => a.settings.keepStyleMenuOpen

const DASH_ICONS = {
  [DashStyle.Draw]: <DashDrawIcon />,
  [DashStyle.Dashed]: <DashDashedIcon />,
  [DashStyle.Dotted]: <DashDottedIcon />,
  [DashStyle.Solid]: <DashSolidIcon />,
}

const SIZE_ICONS = {
  [SizeStyle.Small]: <SizeSmallIcon />,
  [SizeStyle.Medium]: <SizeMediumIcon />,
  [SizeStyle.Large]: <SizeLargeIcon />,
}

const ALIGN_ICONS = {
  [AlignStyle.Start]: <TextAlignLeftIcon />,
  [AlignStyle.Middle]: <TextAlignCenterIcon />,
  [AlignStyle.End]: <TextAlignRightIcon />,
  [AlignStyle.Justify]: <TextAlignJustifyIcon />,
}

export const StyleMenu = memo(() => {
  const app = useAirdrawApp()

  const theme = app.useStore(themeSelector)
  const currentStyle = app.useStore(currentStyleSelector)
  const keepOpen = app.useStore(keepOpenSelector)
  const [displayedStyle, setDisplayedStyle] = useState(currentStyle)

  const handleToggleFilled = useCallback((checked: boolean) => {
    app.style({ isFilled: checked })
  }, [])

  const handleToggleDash = useCallback((dash: string) => {
    app.style({ dash: dash as DashStyle })
  }, [])

  const handleToggleSize = useCallback((size: string) => {
    app.style({ size: size as SizeStyle })
  }, [])

  const handleToggleKeepOpen = useCallback((open: boolean) => {
    app.setSetting('keepStyleMenuOpen', open)
  }, [])

  const handleToggleTextAlign = useCallback((align: string) => {
    app.style({ textAlign: align as AlignStyle })
  }, [])

  useEffect(() => {
    setDisplayedStyle(currentStyle)
  }, [currentStyle])

  return (
    <Root dir="ltr" open={keepOpen ? true : undefined}>
      <Trigger asChild>
        <ToolButton variant="text">
          Styles
          <OverlapIcons style={{ color: strokes[theme][displayedStyle.color] }}>
            {displayedStyle.isFilled && (
              <CircleIcon
                size={16}
                stroke="none"
                fill={fills[theme][displayedStyle.color as ColorStyle]}
              />
            )}
            {DASH_ICONS[displayedStyle.dash]}
          </OverlapIcons>
        </ToolButton>
      </Trigger>
      <DMContent
        id="styles-menu"
        side="bottom"
        align="end"
        sideOffset={4}
        alignOffset={4}
      >
        <StyledRow variant="tall">
          <span>Color</span>
          <ColorGrid>
            {Object.keys(strokes.light).map((style: string) => (
              <Item
                key={style}
                asChild
                onSelect={preventEvent}
                id={`Air-Styles-${style}`}
              >
                <ToolButton
                  variant="icon"
                  isActive={displayedStyle.color === style}
                  onClick={() => {
                    app.style({ color: style as ColorStyle })
                  }}
                >
                  <CircleIcon
                    size={18}
                    strokeWidth={2.5}
                    fill={
                      displayedStyle.isFilled
                        ? fills[theme][style as ColorStyle]
                        : 'transparent'
                    }
                    stroke={strokes.light[style as ColorStyle]}
                  ></CircleIcon>
                </ToolButton>
              </Item>
            ))}
          </ColorGrid>
        </StyledRow>
        <DMCheckboxItem
          variant="styleMenu"
          checked={!!displayedStyle.isFilled}
          onCheckedChange={handleToggleFilled}
          id="Air-Styles-fill"
        >
          Fill
        </DMCheckboxItem>
        <StyledRow variant="tall">
          <span>Dash</span>
          <StyledGroup
            dir="ltr"
            value={displayedStyle.dash}
            onValueChange={handleToggleDash}
          >
            {Object.values(DashStyle).map((style) => (
              <DMRadioItem
                key={style}
                value={style}
                isActive={displayedStyle.dash === style}
                id={`Air-Styles-Dash-${style}`}
                onSelect={preventEvent}
              >
                {DASH_ICONS[style]}
              </DMRadioItem>
            ))}
          </StyledGroup>
        </StyledRow>
        <StyledRow variant="tall">
          <span>Size</span>
          <StyledGroup
            dir="ltr"
            value={displayedStyle.size}
            onValueChange={handleToggleSize}
          >
            {Object.values(SizeStyle).map((size) => (
              <DMRadioItem
                key={size}
                value={size}
                isActive={displayedStyle.size === size}
                id={`Air-Styles-Dash-${size}`}
                onSelect={preventEvent}
              >
                {SIZE_ICONS[size]}
              </DMRadioItem>
            ))}
          </StyledGroup>
        </StyledRow>
        {
          <>
            <Divider />
            <StyledRow variant="tall">
              <span>Align</span>
              <StyledGroup
                dir="ltr"
                value={displayedStyle.textAlign}
                onValueChange={handleToggleTextAlign}
              >
                {Object.values(AlignStyle).map((style) => (
                  <DMRadioItem
                    key={style}
                    value={style}
                    isActive={displayedStyle.textAlign === style}
                    onSelect={preventEvent}
                    id={`Air-style-TextAlign-${style}`}
                  >
                    {ALIGN_ICONS[style]}
                  </DMRadioItem>
                ))}
              </StyledGroup>
            </StyledRow>
          </>
        }
        <Divider />
        <DMCheckboxItem
          id="Air-style-kepp-open"
          checked={keepOpen}
          onCheckedChange={handleToggleKeepOpen}
          variant="styleMenu"
        >
          Keep Open
        </DMCheckboxItem>
      </DMContent>
    </Root>
  )
})

const OverlapIcons = styled('div', {
  display: 'grid',
  '& > *': {
    gridColumn: 1,
    gridRow: 1,
  },
})

const StyledGroup = styled(RadioGroup, {
  display: 'flex',
  gap: '$1',
})

const StyledRow = styled('div', {
  position: 'relative',
  width: '100%',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  minHeight: '32px',
  outline: 'none',
  color: '$text',
  fontFamily: '$ui',
  fontWeight: 400,
  fontSize: '$1',
  padding: '$2 0 $2 $3',
  borderRadius: 4,
  margin: 0,
  gap: '$3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  variants: {
    variant: {
      tall: {
        alignItems: 'flex-start',
        padding: '0 0 0 $3',
        '& > span': {
          paddingTop: '$4',
        },
      },
    },
  },
})

const ColorGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)',
  gap: 0,
})
