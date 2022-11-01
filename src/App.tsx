import { useRef } from 'react'
import { AirdrawApp } from '~/state'
import { Airdraw } from './components/airdraw'
import './style.css'

function App() {
  const app = useRef<AirdrawApp>()


  return (
    <div className="airdraw">
      <Airdraw id="airdraw"   />
    </div>
  )
}

export default App
