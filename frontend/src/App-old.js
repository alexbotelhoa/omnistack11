import React, { useState } from 'react';

import Hearder from './Header';

export default function App() {
    const [counter, setCounter] = useState(0);

    //Arry [valor, funcaoDeAtualizacao]

    function increment() {
      setCounter(counter + 1);
      console.log(counter);
    }

    return (
      <div>
        <Hearder>Contador: {counter}</Hearder>
        <button onClick={increment}>Adicionar</button>
      </div>
    );
}