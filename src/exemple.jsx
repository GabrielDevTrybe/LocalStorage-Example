import React, { useState } from 'react';

function WebStorage() {
  const [array, setArray] = useState(() => {
    const storedArray = localStorage.getItem('myArray');
    return storedArray ? JSON.parse(storedArray) : [];
  });
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const updatedArray = [...array, name];
    setArray(updatedArray);
    localStorage.setItem('myArray', JSON.stringify(updatedArray));
    setName('');
  };

  return (
    <form onSubmit={handleClick}>
      <label>
        Novo Item:
        <input onChange={handleChange} type="text" name="item" value={name} />
      </label>
      <button type="submit">Adicionar</button>

      <body>
        <ul>
          {array.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </body>
    </form>
  );
}

export default WebStorage;
