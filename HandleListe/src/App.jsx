import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/layout.scss'
import './style/form.scss'
import './style/items.scss'

function App() {
  const [kurv, leggVare] = useState({
    vare:'', 
    antall:'',
  })

  const handleChange = (e)=>{
    leggVare({...kurv,[e.target.name]: e.target.value})
  }

    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(kurv)
  }

  return (
    <main>
      <section>
        <h1>Handleliste</h1>
        <form onSubmit={handleSubmit}>
          <label>Vare:</label>
          <input placeholder="Egg" type="text" 
          value={kurv.vare} onChange={handleChange} 
          name='vare'>
          </input>
          <label>Antall:</label>
          <input placeholder="2" type="number" 
          value={kurv.antall} onChange={handleChange} 
          name='antall'>
          </input>
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
