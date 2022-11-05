import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useState,
} from 'react'

export const ContainerContext = createContext({} as RefObject<HTMLDivElement>)

const useForceUpdate = () => {
  const [, setState] = useState(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setState(1))
}

export const useContainer = () => {
  const container = useContext(ContainerContext)
  useForceUpdate()

  return container
}
