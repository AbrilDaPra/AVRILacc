import { useContext, useState } from "react";
// import { toCapital } from "../helpers/toCapital"
import Counter from "../components/Counter";
import { CartContext } from "../context/CartContext";
import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
      // if (quantity > 1) {
      //   setQuantity(quantity - 1);
      // }
      quantity > 1 && setQuantity(quantity - 1)
    };
    
    const handleIncrement = () => {
      // if (quantity < product.stock) {
      //   setQuantity(quantity + 1);
      // }
      quantity < item.stock && setQuantity(quantity + 1)
    };
    
    // const handleAdd = () => {
    //   if (quantity > 0) {
    //     addToCart(item, quantity);
    //   } else {
    //     console.log("Please select at least one product to add to the cart");
    //   }
    // };

  return (
    <Card>
      <CardMedia
        sx={{ height: "300px" }}
        image={item.image}
        title={item.name}
        alt={item.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {item.categorie}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.price}
        </Typography>
        <CardActions>
          <Counter
            quantity={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleAdd={() => { addToCart(item, quantity) }}
          />
        </CardActions>
        
      </CardContent>
    </Card>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;