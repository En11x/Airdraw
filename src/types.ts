export interface AirTheme {
  background?: string
}

export type Patch<T> = Partial<{ [P in keyof T]: Patch<T[P]> }>

//the app store
export interface AIRSnapshot {
  settings: {
    isDarkMode: boolean
  }
}
