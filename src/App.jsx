import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
   <div className='App'>
  <Navbar />
  <ItemListContainer greeting={'Bienvenidos a Winka'}/>
  <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
  </div>
);
}

export default App
