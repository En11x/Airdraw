import { DMSubMenu } from '~/components/primitives/dropdown-menu/DMSubMenu'
import { DMCheckboxItem } from '~/components/primitives/dropdown-menu/DMCheckboxItem'
import { useAirdrawApp } from '~/hooks'
import { useCallback } from 'react'
import { AIRSnapshot } from '~/types'

const settingsSelector = (s:AIRSnapshot) => s.settings

export const PreferencesMenu = () => {
  const app = useAirdrawApp()

  const settings = app.useStore(settingsSelector)

  const toggleDarkMode = useCallback(() => {
    app.setSetting('isDarkMode', (v) => !v)
  }, [app])

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
    </DMSubMenu>
  )
}
