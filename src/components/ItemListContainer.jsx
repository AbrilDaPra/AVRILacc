import ItemList from './ItemList';

//Agregar useParams para categoria

const ItemListContainer = () => {
  const products = [
    { id: 1, name: "Product A", description: "......", price: 1000, categorie: "A"},
    { id: 2, name: "Product B", description: "......", price: 1000, categorie: "B"},
    { id: 3, name: "Product C", description: "......", price: 1000, categorie: "B"},
    { id: 4, name: "Product D", description: "......", price: 1000, categorie: "C"},
    { id: 5, name: "Product E", description: "......", price: 1000, categorie: "C"},
    { id: 6, name: "Product F", description: "......", price: 1000, categorie: "D"},
  ]

  const showProducts = new Promise ((resolve, reject) => {
    if (products.length > 0) {
        setTimeout(() => {
            resolve(products)
        }, 5000)
    } else {
        reject("No products available")
    }
})

  showProducts
      .then((result) => {
          console.log(result)
      })
      .catch((error) => {
          console.log(error)
      })

  return (
      <>
          <ItemList products={products} />
      </>
  )
};

export default ItemListContainer;