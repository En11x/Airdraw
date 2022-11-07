import { createContext, useContext } from 'react'
import { AirShape } from '~/types'
import { Inputs } from '~/utils/input'

export interface AirdrawContextType<T extends AirShape> {
  id?: string
  inputs: Inputs
}

export const AirdrawContext = createContext({} as AirdrawContextType<AirShape>)

export const useAirdrawContext = () => {
  const context = useContext(AirdrawContext)

  return context
}
