import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/layout.scss'
import './style/form.scss'
import './style/items.scss'

function App() {
  const [checked, setChecked] = useState(false); 
  const [quantity, setQty] = useState(1);

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
          <li className="item">
            <div className="item-left">
            <label>
              <input className="item-checkbox" 
              type="checkbox" 
              checked={checked} 
              onChange={(e) => setChecked(e.target.checked)} />          
            </label>
            Egg
            </div>
            <label>
              <input className="item-quantity" 
              type="number" min="1" 
              value={quantity} onChange={(e) => setQty(Number(e.target.value))} />
            </label>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
