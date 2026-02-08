import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/layout.scss'
import './style/form.scss'
import './style/items.scss'

function App() {

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
              <input className="item-checkbox" type="checkbox" />          
            </label>
            Egg
            </div>
            <label>
              <input className="item-quantity" placeholder="1" type="number" min="1" />
            </label>
          </li>
          <li className="item">
            <div className="item-left">
            <label>
              <input className="item-checkbox" type="checkbox"  defaultChecked/>          
            </label>
            Melk
            </div>
            <label>
              <input className="item-quantity" placeholder="1" type="number" min="1" />
            </label>
          </li>
          <li className="item">
            <div className="item-left">
            <label>
              <input className="item-checkbox" type="checkbox" />          
            </label>
            Viljen til å leve
            </div>
            <label>
              <input className="item-quantity" placeholder="x" type="number" min="1" />
            </label>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
