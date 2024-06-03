import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import CartContextProvider from "./components/CartContext/CartContext";


function App() {
  return (
    <div className='App'>
      <CartContextProvider>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting={'Welcome to Winka'} />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App
