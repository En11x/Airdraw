export class Utils {
  /**
   * find device when draw
   */
  static isDarwin(): boolean {
    return /Mac|iPad|iPhone|iPad/.test(window.navigator.platform)
  }
}
