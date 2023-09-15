import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/item" element={ <ItemDetailContainer /> } />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/aboutus" element={ <Aboutus /> } />
          <Route exact path="/contact" element={ <Contact /> } />
          <Route exact path="/cart" element={ <Cart />} />

          {/* <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/Item/:id" element={<ItemDetailContainer />} /> */}

        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App;