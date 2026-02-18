import { useState } from "react";

    export default function AddForm({leggTilVare}) {
    
    const [form, setForm] = useState({vare: '', antall: '' })
    const [feil, setFeil] = useState('')

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.vare.trim() && !form.antall) {
            setFeil("Du må fylle ut vare og antall feltene.")
            return;
        }

        if (!form.vare.trim()) {
            setFeil("Du må legge inn en vare.")
            return;
        }

        if (!form.antall || Number(form.antall) === 0){
            setFeil("Antallet kan ikke være tom og den må være større en 0.")
            return;
        }

        setFeil("");

        const nyVare = {
            id: crypto.randomUUID(),
            vare: form.vare,
            antall: Number(form.antall),
            krysset: false
        };

        leggTilVare(nyVare)

        setForm({vare: "", antall: ""})
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Vare:</label>
            <input
            type="text"
            name="vare"
            placeholder="Egg"
            value={form.vare}
            onChange={handleChange}
            />

            <label>Antall:</label>
            <input
            type="number"
            name="antall"
            placeholder="2"
            value={form.antall}
            onChange={handleChange}
            />

            <button>Legg til kurv</button>

            {feil ? <p className="error">{feil}</p> :null}
        </form>
    )
}
