import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Welcome to Winka'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
