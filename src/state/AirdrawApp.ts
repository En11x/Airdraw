import { AIRSnapshot, AirToolType, ShapeStyles } from '~/types'
import * as Commands from './commands/index'
import { defaultStyle } from './shared'
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

  /**
   * get app state
   */
  get appState(): AIRSnapshot['appState'] {
    return this.state.appState
  }

  toggleDarkMode = (): this => {
    const patch = { settings: { isDarkMode: !this.settings.isDarkMode } }
    this.patchState(patch, `settings:toggled_dark_mode`)
    return this
  }

  static defaultState: AIRSnapshot = {
    settings: {
      isDarkMode: false,
      keepStyleMenuOpen: false,
      dockPosition: 'bottom',
    },
    appState: {
      currentStyle: defaultStyle,
      activeTool: 'select',
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

    this.patchState(patch, `settings:${name}`)

    return this
  }

  /**
   * change style fof shape
   */
  style = (style: Partial<ShapeStyles>): this => {
    return this.setState(Commands.styleShapes(this, [''], style))
  }

  /**
   * select a tool
   */
  selectTool(type: AirToolType): this {
    return this.patchState(
      {
        appState: {
          activeTool: type,
        },
      },
      `select_tool:${type}`
    )
  }
}
