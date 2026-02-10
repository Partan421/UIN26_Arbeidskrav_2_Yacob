import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/layout.scss'
import './style/form.scss'
import './style/items.scss'

function App() {
  const [kurv, leggTilVare] = useState({
    vare:'', 
    antall:'',
  })

  const [liste, setListe] =useState([
    {
      id: crypto.randomUUID(),
      vare: "Egg",
      antall: 1,
    },
    {
      id: crypto.randomUUID(),
      vare: "Melk",
      antall: 1,
      krysset: true,

    }
  ])

  const handleChange = (e)=>{
    leggTilVare({...kurv,[e.target.name]: e.target.value})
  }

    const handleSubmit = (e)=>{
      e.preventDefault()

      const nyVare = {
        id: crypto.randomUUID(),
        vare: kurv.vare,
        antall: kurv.antall
      }

      setListe((prev) => [nyVare, ...prev])

      leggTilVare({ vare: '', antall: ''})


      console.log(kurv)
  }

  return (
    <main>
      <section>
        <h1>Handleliste</h1>
        <form onSubmit={handleSubmit}>
          <label>Vare:</label>
          <input placeholder="Egg" type="text" 
          value={kurv.vare } onChange={handleChange} 
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
          {liste.map((item) => 
          <li key={item.id} className="item">
            <div className="item-left">
              <label>
                <input className="item-checkbox" type="checkbox" defaultChecked={item.krysset}/>
              </label>
              {item.vare}
            </div>
            <label>
              <input
              className="item-quantity"
              type="number"
              min="1"
              defaultValue={item.antall}
              />
            </label>
          </li>
          )}
        </ul>
      </section>
    </main>
  )
}

export default App
