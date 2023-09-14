import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Aboutus from './components/Aboutus';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {

  return (
    <>
      <BrowserRouter>

        <NavBar />
        <Banner />
        <ItemListContainer />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/Item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/cart" element={<Cart />} />

        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App;