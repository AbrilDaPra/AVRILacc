import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Counter from './Counter';
import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext';

const Item = ( {product} ) => {
  const { id, Title, Image, Price, Stock} = product;
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1)
  };
  
  const handleIncrement = () => {
    quantity < Stock && setQuantity(quantity + 1)
  };

  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
        <div>
            <Card className="product-card">
              <Link to={`/products/${id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={Image?.path}
                  title={Title}
                  alt={Title}
                  className="product-image"
                />
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontSize: '20px' }}>
                  {Title}
                </Typography>
              </CardContent>
            </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary" className="product-price">
                  Price: ${Price}
                </Typography>
                {/* <Button onClick={toggleDescription} className="show-details-button">
                  {showDescription ? "Hide details" : "Show details"}
                </Button>
                {showDescription && <p>{description}</p>} */}
              </CardContent>
              <CardActions>
                <Counter className="product-counter" 
                  quantity={quantity}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  handleAdd={() => { addToCart(product, quantity) }}
                />
              </CardActions>
            </Card>
        </div>
    </div>
  )
}

Item.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Item