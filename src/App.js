import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'ReactNative']);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [techs, newTech]);

  // Comportamento igual ao componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTechs(JSON.parse(storageTech));
    }
  }, []);

  // Comportamento igual ao componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
