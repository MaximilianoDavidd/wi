import { useState } from 'react'
import Home from './components/Home/Home';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
   <div className='App'>
  <Home />
  <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
  </div>
);
}

export default App
