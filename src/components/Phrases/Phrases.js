import React from 'react';

export default function Phrases({ catchphrase, catchphrases, setCatchphrase, setCatchphrases }) {
  const saveCatchphrase = () => {
    setCatchphrases((prevState) => [...prevState, catchphrase]);
    setCatchphrase('');
  };
  return (
    <div>
      <label>
        Add a catch phrase
        <input value={catchphrase} type="text" onChange={(e) => setCatchphrase(e.target.value)} />
        <button onClick={saveCatchphrase}>Add</button>
      </label>
      <ul>
        {catchphrases.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
