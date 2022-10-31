import { DMSubMenu } from '~/components/primitives/dropdown-menu/DMSubMenu'
import { DMCheckboxItem } from '~/components/primitives/dropdown-menu/DMCheckboxItem'

export const PreferencesMenu = () => {
  return (
    <DMSubMenu label="Preferences" id="Air-MenuItem-Preferences">
      <DMCheckboxItem
        id="Air-MenuItem-Preferences-Dark_Mode"
        kbd="#⇧D"
        checked={true}
      >
        Dark Mode
      </DMCheckboxItem>
    </DMSubMenu>
  )
}
