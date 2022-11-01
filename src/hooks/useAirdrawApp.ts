import { createContext, useContext } from 'react'
import { AirdrawApp } from '~/state'

export const AirdrawAppContext = createContext<AirdrawApp>({} as AirdrawApp)

export const useAirdrawApp = () => {
  const context = useContext(AirdrawAppContext)

  return context
}
