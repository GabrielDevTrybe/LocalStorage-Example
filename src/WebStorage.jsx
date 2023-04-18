import React, { useState } from 'react'

function WebStorage() {
  const [array, setArray] = useState([]);
  const [name, setName] = useState('');

  console.log(array)

  const handleChange = ({ target }) => {
    setName(target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    setArray((prevState) => [...prevState, name]);
    //Primeiro set o item e dentro transforma o item em string
    localStorage.setItem('myArray', JSON.stringify([...array, name]));
    event.target.item.value = '';
  }

  // Depois da um parse e dentro do parse pega o item
  const meuItem = JSON.parse(localStorage.getItem('myArray'))

  return (
    <form onSubmit={handleClick}>
      <label>
        Novo Item:
        <input onChange={handleChange} type="text" name="item" />
      </label>
      <button type="submit">Adicionar</button>

      <body>
        <ul>
          {meuItem.map((e) => <li>{e}</li>)}
        </ul>
      </body>
    </form>
  )
}

export default WebStorage