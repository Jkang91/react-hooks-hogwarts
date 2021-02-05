import { useState } from "react";

function HogFrom({onAddHog}) {
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [greased, setGreased] = useState("");
    const [weight, setWeight] = useState("");
    const [medal, setMedal] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        //object initializer shorthand
        const newHog = {
            name,
            specialty,
            greased,
            weight: parseFloat(weight),
            'highest medal achieved' : medal,
        }
        onAddHog(newHog)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />

            <label htmlFor="specialty">Specialty</label>
            <input type="text" id="name" value={specialty} onChange={e => setSpecialty(e.target.value)} />

            <label htmlFor="greased">Greased</label>
            <input type="checkbox" id="name" value={greased} onChange={e => setGreased(e.target.checked)} />

            <label htmlFor="weight">Weight</label>
            <input type="number" id="name" value={weight} onChange={e => setWeight(e.target.value)} step="0.1" />

            <label htmlFor="medal">Medal</label>
            <input type="text" id="name" value={medal} onChange={e => setMedal(e.target.value)} />

            <button type="submit">Add Hog</button>
        </form>
    )
}

export default HogFrom;