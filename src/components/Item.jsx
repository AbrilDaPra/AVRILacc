import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

const Item = ({ name, image, price, product }) => {
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        height="300"
        image={image}
        title={name}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Link className='see-more' to={`/item/${product.id}`}>SEE DETAILS</Link>
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};

export default Item;