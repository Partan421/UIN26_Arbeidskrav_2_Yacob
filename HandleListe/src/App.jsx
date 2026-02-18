import { useState } from 'react'
import AddForm from './components/AddForm'
import HandleListe from './components/ShoppingList'
import './App.css'
import './style/layout.scss'
import './style/form.scss'
import './style/items.scss'

function App() {
  const [liste, setListe] = useState([
    {
      id: crypto.randomUUID(),
      vare: 'Egg',
      antall: 1,
      krysset: false, 
    },

    {
      id: crypto.randomUUID(),
      vare: 'Melk',
      antall: 1,
      krysset: true, 
    }
  ]);

  const leggTilVare = (nyVare) => {
    setListe((prev) => [nyVare, ...prev])
  };

  return(
    <main>
      <section>
        <h1>Handleliste</h1>

        <AddForm leggTilVare={leggTilVare} />

        <HandleListe liste={liste} />
      </section>
    </main>
  )

}

export default App;