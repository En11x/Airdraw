import { AirdrawApp } from '~/state/AirdrawApp'
import { AirdrawCommand, ShapeStyles } from '~/types'

export function styleShapes(
  app: AirdrawApp,
  ids: string[],
  changes: Partial<ShapeStyles>
): AirdrawCommand {
  return {
    id: 'style',
    before: {
      appState: {
        currentStyle: { ...app.appState.currentStyle },
      },
    },
    after: {
      appState: {
        currentStyle: changes,
      },
    },
  }
}
