import { Patch } from '~/types'

export class Utils {
  /**
   * find device when draw
   */
  static isDarwin(): boolean {
    return /Mac|iPad|iPhone|iPad/.test(window.navigator.platform)
  }

  static deepMerge = <T>(target: T, patch: Patch<T>): T => {
    const result: T = { ...target }
    const entries = Object.entries(patch) as [keyof T, T[keyof T]][]

    for (const [key, value] of entries) {
      result[key] =
        value === Object(value) && !Array.isArray(value)
          ? Utils.deepMerge(result[key], value)
          : value
    }

    return result
  }
}
