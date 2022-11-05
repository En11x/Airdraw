import { useLayoutEffect, useMemo } from 'react'
import { AirTheme } from '../types'

const styles = new Map<string, HTMLStyleElement>()
type AnyTheme = Record<string, string>

//create css theme
function makeCssTheme<T extends AnyTheme>(prefix: string, theme: T) {
  return Object.keys(theme).reduce((acc, key) => {
    const value = theme[key]
    if (value) {
      return acc + `${`--${prefix}-${key}`}:${value};\n`
    }
    return acc
  }, '')
}

//create style theme
function useTheme<T extends AnyTheme>(
  prefix: string,
  theme: T,
  selector = ':root'
) {
  useLayoutEffect(() => {
    const style = document.createElement('style')
    const cssTheme = makeCssTheme(prefix, theme)

    style.setAttribute('id', `${prefix}-theme`)
    style.setAttribute('data-selector', selector)
    style.innerHTML = `
      ${selector}{
        ${cssTheme}
      }
    `
    document.head.appendChild(style)

    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [prefix, selector, theme])
}

//create style ele
const useStyle = (uid: string, rules: string) => {
  useLayoutEffect(() => {
    if (styles.get(uid)) {
      return () => void null
    }

    const style = document.createElement('style')
    style.innerHTML = rules
    style.setAttribute('id', uid)
    document.head.appendChild(style)
    styles.set(uid, style)

    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style)
        styles.delete(uid)
      }
    }
  }, [uid, rules])
}

const css = (strings: TemplateStringsArray, ...args: unknown[]) =>
  strings.reduce(
    (acc, string, index) =>
      acc + string + (index < args.length ? args[index] : ''),
    ''
  )

export const AIR_CSS = css`
  .air-container {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--air-background);
  }
  .air-canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: all;
    overflow: clip;
  }
`

const defaultTheme: AirTheme = {
  background: 'rgb(248, 249, 250)',
}

export function useAirTheme(theme?: Partial<AirTheme>, selector?: string) {
  const AirTheme = useMemo(
    () => ({
      ...defaultTheme,
      ...theme,
    }),
    [theme]
  )
  useTheme('air', AirTheme, selector)
  useStyle('air-canvas', AIR_CSS)
}
