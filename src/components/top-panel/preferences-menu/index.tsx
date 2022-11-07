import { useCallback } from 'react'
import { Divider } from '~/components/primitives/divider'
import { DMCheckboxItem } from '~/components/primitives/dropdown-menu/DMCheckboxItem'
import { DMSubMenu } from '~/components/primitives/dropdown-menu/DMSubMenu'
import { useAirdrawApp } from '~/hooks'
import { styled } from '~/styles'
import { AIRDockPosition, AIRSnapshot } from '~/types'

const settingsSelector = (s: AIRSnapshot) => s.settings

const DockPosition = ['bottom', 'left', 'right', 'top']

export const PreferencesMenu = () => {
  const app = useAirdrawApp()

  const settings = app.useStore(settingsSelector)

  const toggleDarkMode = useCallback(() => {
    app.setSetting('isDarkMode', (v) => !v)
  }, [app])

  const toggleDockPosition = useCallback(
    (position: string) => {
      app.setSetting('dockPosition', position as AIRDockPosition)
    },
    [app]
  )

  return (
    <DMSubMenu label="Preferences" id="Air-MenuItem-Preferences">
      <DMCheckboxItem
        id="Air-MenuItem-Preferences-Dark_Mode"
        kbd="#⇧D"
        checked={settings.isDarkMode}
        onCheckedChange={toggleDarkMode}
      >
        Dark Mode
      </DMCheckboxItem>
      <Divider />
      <DMSubMenu label="Dock Position" id="Air-MenuItem-DockPosition">
        {DockPosition.map((position) => (
          <DMCheckboxItem
            key={position}
            id="Air-MenuItem-Preferences-DockPosition"
            checked={settings.dockPosition === position}
            onCheckedChange={() => toggleDockPosition(position)}
          >
            <StyledText>{position}</StyledText>
          </DMCheckboxItem>
        ))}
      </DMSubMenu>
    </DMSubMenu>
  )
}

const StyledText = styled('span', {
  textTransform: 'capitalize',
})
