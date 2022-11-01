import { AIRSnapshot } from '~/types'
import { StateManager } from './state-manager'

export interface AirCallbacks {
  /**
   * a callback to run when component mounts
   */
  onMount?: (app: AirdrawApp) => void
}

export class AirdrawApp extends StateManager<AIRSnapshot> {
  constructor(id?: string) {
    super(AirdrawApp.defaultState, id)
  }

  /**
   * the current state settings
   *
   */
  get settings(): AIRSnapshot['settings'] {
    return this.state.settings
  }

  toggleDarkMode = (): this => {
    const patch = { settings: { isDarkMode: !this.settings.isDarkMode } }
    this.patchState(patch, `settings:toggled_dark_mode`)
    return this
  }

  static defaultState: AIRSnapshot = {
    settings: {
      isDarkMode: false,
    },
  }

  /**
   * set a setting
   */
  setSetting = <
    T extends keyof AIRSnapshot['settings'],
    V extends AIRSnapshot['settings'][T]
  >(
    name: T,
    value: V | ((value: V) => V)
  ): this => {
    const patch = {
      settings: {
        [name]:
          typeof value === 'function' ? value(this.settings[name] as V) : value,
      },
    }

    this.patchState(patch,`settings:${name}`)

    return this
  }
}
