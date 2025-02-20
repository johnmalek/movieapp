import React, { useState } from "react";

function MovieForm({ onSubmit }){
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim()) return null;
        onsubmit(name);
        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Enter movie name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Get Movie</button>
        </form>
    );
}

export default MovieForm;