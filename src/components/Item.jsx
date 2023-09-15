import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import PropTypes from 'prop-types';
import '../App.css';
import { useState } from 'react';

const Item = ({ id, name, image, price, product }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card className="product-card">
      <Link to={`/products/${id}`}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          title={name}
          alt={name}
          className='product-image'
        />
        <CardContent sx={{ paddingBottom: '0'}}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontSize: '20px' }}>
            {name}
          </Typography>
        </CardContent>
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary" className='product-price'>
          Price: ${price}
        </Typography>
        <button onClick={toggleDescription} className='show-details-button'>
          {showDescription ? "Hide details" : "Show details"}
        </button>
        {showDescription && <p>{product.description}</p>}
      </CardContent>
      <CardActions>
        <Counter className="product-counter" />
      </CardActions>
    </Card>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};

export default Item;