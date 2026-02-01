import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/layout.scss'
import './style/form.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section>
        <h1>Handleliste</h1>
        <form>
          <label>Vare:</label>
          <input placeholder="Egg"></input>
          <label>Antall:</label>
          <input placeholder="2"></input>
          <button>Legg til kurv</button>
        </form>
        <ul>
          <li>Egg</li>
          <li>Melk</li>
        </ul>
      </section>
    </main>
  )
}

export default App
