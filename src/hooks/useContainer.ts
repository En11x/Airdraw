import { createContext, RefObject, useContext } from 'react'

export const ContainerContext = createContext({} as RefObject<HTMLDivElement>)

export const useContainer = () => {
  const container = useContext(ContainerContext)

  return container
}
