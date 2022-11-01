import { DMSubMenu } from '~/components/primitives/dropdown-menu/DMSubMenu'
import { DMCheckboxItem } from '~/components/primitives/dropdown-menu/DMCheckboxItem'
import { useAirdrawApp } from '~/hooks'
import { useCallback } from 'react'

export const PreferencesMenu = () => {
  const app = useAirdrawApp()
  const toggleDarkMode = useCallback(() => {
    app.setSetting('isDarkMode', (v) => !v)
  }, [app])

  return (
    <DMSubMenu label="Preferences" id="Air-MenuItem-Preferences">
      <DMCheckboxItem
        id="Air-MenuItem-Preferences-Dark_Mode"
        kbd="#⇧D"
        checked={app.settings.isDarkMode}
        onCheckedChange={toggleDarkMode}
      >
        Dark Mode
      </DMCheckboxItem>
    </DMSubMenu>
  )
}
