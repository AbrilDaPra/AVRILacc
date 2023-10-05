import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("products");
    const categorie = useParams().categorie;

    useEffect(() => {
      const productsRef = collection(db, "products");
      const q = categorie ? query(productsRef, where("Categorie", "==", categorie)) : productsRef;

      getDocs(q)
        .then((resp) => {
          setProducts(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          );
          setTitle("Products");
        });
        
    }, [categorie])
     
  return (
    <div className="products-container">
      <h1>PRODUCTS</h1>

      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button component={Link} to="/categorie/rings">Rings</Button>
        <Button component={Link} to="/categorie/earrings">Earrings</Button>
        <Button component={Link} to="/categorie/necklaces">Necklaces</Button>
        <Button component={Link} to="/categorie/bracelets">Bracelets</Button>
        <Button component={Link} to="/products">All</Button>
      </ButtonGroup>

      <ItemList products={products} title={title} />
    </div>
  )
}

export default ItemListContainer;