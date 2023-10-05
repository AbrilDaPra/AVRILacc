import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Counter from './Counter';

const Item = ( {product} ) => {
  const { id, Title, Image, Price, Stock} = product;

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
                  // stock={} 
                  quantity={Stock}
                  // handleDecrement={handleDecrement}
                  // handleIncrement={handleIncrement}
                  // handleAdd={handleAdd}
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