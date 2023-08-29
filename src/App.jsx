import './App.css';
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/NavBar';

function App() {

  const greeting = "Bienvenidos a AVRIL accesorios";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting = {greeting} />
    </>
  )
}

export default App
